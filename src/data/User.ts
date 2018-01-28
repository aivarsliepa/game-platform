export interface User {
  name: string;
  id: string;
  room: string;
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

  removeUser(id: string): void {
    this.users = this.users.filter(user => user.id !== id);
  }

  getUser(id: string): User | undefined {
    return this.users.find(user => user.id === id);
  }

  getUserListForRoom(room: string): User[] {
    return this.users.filter(user => user.room === room);
  }

  getUserNamesForRoom(room: string): string[] {
    return this.users.filter(user => user.room === room).map(user => user.name);
  }

  setUserRoom(id: string, room: string): void {
    const user = this.getUser(id);
    if (user) {
      user.room = room;
    }
  }
}
