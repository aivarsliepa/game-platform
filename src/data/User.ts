export interface User {
  name: string;
  id: string;
  room: string;
}

export class UserData {
  private users: User[] = [];

  addUser(user: User | User[]): void {
    this.users = this.users.concat(user);
  }

  removeUser(id: string): User | undefined {
    const removedUser = this.getUserById(id);
    this.users = this.users.filter(user => user.id !== id);
    return removedUser;
  }

  getUserById(id: string): User | undefined {
    return this.users.find(user => user.id === id);
  }

  getUserByName(name: string | undefined): User | undefined {
    return this.users.find(user => user.name === name);
  }

  getUserListForRoom(room: string): User[] {
    return this.users.filter(user => user.room === room);
  }

  getUserNamesForRoom(room: string): string[] {
    return this.users.filter(user => user.room === room).map(user => user.name);
  }
}
