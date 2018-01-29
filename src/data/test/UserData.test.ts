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

  describe("getCount", () => {
    it("should return correct count", () => {
      users.addUser(user1);
      expect(users.getCount()).toBe(4);
    });
  });

  describe("addUser", () => {
    it("should add new user", () => {
      expect(users.getCount()).toBe(3);
    });
  });

  describe("removeUser", () => {
    it("should remove user", () => {
      users.removeUser(user2.id);
      expect(users.getUserList()).not.toEqual(expect.arrayContaining([user2]));
      expect(users.getCount()).toBe(2);
    });

    it("should return removed user", () => {
      const result = users.removeUser(user2.id);
      expect(result).toBe(user2);
    });
  });

  describe("getUser", () => {
    it("should return correct user", () => {
      expect(users.getUser(user1.id)).toEqual(user1);
    });

    it("should not find non existant user", () => {
      expect(users.getUser("zzzzzss")).toBeFalsy();
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

  describe("getUserList", () => {
    it("should return whole list of users", () => {
      expect(users.getUserList()).toEqual(
        expect.arrayContaining([user1, user3, user2])
      );
    });
  });

  describe("setUserRoom", () => {
    it("should set correct user name", () => {
      const newRoom = "newRoom";
      users.setUserRoom(user1.id, newRoom);
      expect(users.getUser(user1.id).room).toBe(newRoom);
    });
  });

  describe("getUserNamesForRoom", () => {
    it("should return only names of users for a room", () => {
      expect(users.getUserNamesForRoom(user3.room)).toEqual(
        expect.arrayContaining([user2.name, user3.name])
      );
    });
  });
});
