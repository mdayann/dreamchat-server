/* eslint-disable no-param-reassign */
const users = [];

const addUser = ({ id, name, room }) => {
  // trim room and name
  name = name.trim().toLowerCase();
  room = room.trim().toLowerCase();

  const existingUser = users.find(
    // eslint-disable-next-line comma-dangle
    (user) => user.room === room && user.name === name
  );

  if (existingUser) {
    return { error: 'Username is taken' };
  }

  const user = { id, name, room };

  users.push(user);

  return { user };
};

// eslint-disable-next-line consistent-return
const removeUser = (id) => {
  const index = users.findIndex((user) => user.id === id);

  if (index !== -1) {
    return users.splice(index, 1)[0];
  }
};

const getUser = (id) => users.find((user) => user.id === id);

const getUsersInRoom = (room) => users.filter((user) => user.room === room);

module.exports = {
  addUser,
  removeUser,
  getUser,
  getUsersInRoom,
};
