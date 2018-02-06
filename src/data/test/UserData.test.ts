import { UserData } from "../User";

describe("UserData", () => {
  let users: UserData;
  const user1 = { name: "name1", id: "id1", room: "room1" };
  const user2 = { name: "name2", id: "id2", room: "room2" };
  const user3 = { name: "name3", id: "id3", room: "room2" };

  beforeEach(() => {
    users = new UserData();
    users.addUser(user1);
    users.addUser(user2);
    users.addUser(user3);
  });

  describe("addUser", () => {
    it("should add new user", () => {
      users.addUser(user1);
      expect(users.getUserListForRoom(user1.room).length).toBe(2);
    });

    it("should add multiple users", () => {
      users.addUser([user2, user3]);
      expect(users.getUserListForRoom(user2.room).length).toBe(4);
    });
  });

  describe("removeUser", () => {
    it("should remove user", () => {
      users.removeUser(user2.id);
      expect(users.getUserById(user2.id)).toBeFalsy();
    });

    it("should return removed user", () => {
      const result = users.removeUser(user2.id);
      expect(result).toBe(user2);
    });
  });

  describe("getUserById", () => {
    it("should return correct user", () => {
      expect(users.getUserById(user1.id)).toEqual(user1);
    });

    it("should not find non existant user", () => {
      expect(users.getUserById("zzzzzss")).toBeFalsy();
    });
  });

  describe("getUserListForRoom", () => {
    it("should return only names of the specified room", () => {
      expect(users.getUserListForRoom(user3.room)).toEqual(
        expect.arrayContaining([user2, user3])
      );
      expect(users.getUserListForRoom(user1.room)).toEqual([user1]);
    });
  });

  describe("getUserNamesForRoom", () => {
    it("should return only names of users for a room", () => {
      expect(users.getUserNamesForRoom(user3.room)).toEqual(
        expect.arrayContaining([user2.name, user3.name])
      );
    });
  });

  describe("findUserById", () => {
    it("should return correct user", () => {
      expect(users.getUserByName(user1.name)).toEqual(user1);
    });

    it("should not find non existant user", () => {
      expect(users.getUserByName("zzzzzss")).toBeFalsy();
    });
  });
});
