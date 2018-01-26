export interface User {
  name?: string;
  id: string;
  room?: string;
}

export class UserData {
  private users: User[] = [];

  addUser(user: User): void {
    this.users = this.users.concat(user);
  }

  getUserList(): User[] {
    return this.users.slice();
  }

  getCount(): number {
    return this.users.length;
  }

  removeUser(id: string): User {
    const removedUser = this.getUser(id);
    this.users = this.users.filter(user => user.id !== id);
    return removedUser;
  }

  getUser(id: string): User {
    return this.users.find(user => user.id === id);
  }

  getUserListForRoom(room: string): User[] {
    return this.users.filter(user => user.room === room);
  }

  getUserNamesForRoom(room: string): string[] {
    return this.users.filter(user => user.room === room).map(user => user.name);
  }

  setUserName(id: string, name: string): void {
    this.getUser(id).name = name;
  }

  setUserRoom(id: string, room: string): void {
    this.getUser(id).room = room;
  }
}
