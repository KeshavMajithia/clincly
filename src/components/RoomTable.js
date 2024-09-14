import React, { useState } from 'react';

const RoomTable = ({ searchQuery }) => {
  const [rooms] = useState([
    { id: 101, type: 'Exam', status: 'Occupied', availability: 'In use' },
    { id: 201, type: 'Exam', status: 'Available', availability: 'Not in use' },
    { id: 305, type: 'Surgery', status: 'Occupied', availability: 'In use' },
    { id: 402, type: 'Recovery', status: 'Available', availability: 'Not in use' },
    { id: 510, type: 'Consultation', status: 'Occupied', availability: 'In use' },
  ]);

  const filteredRooms = rooms.filter(room =>
    room.id.toString().includes(searchQuery)
  );

  return (
    <div className="table-container">
      <table>
        <thead>
          <tr>
            <th>Room</th>
            <th>Type</th>
            <th>Status</th>
            <th>Availability</th>
          </tr>
        </thead>
        <tbody>
          {filteredRooms.map((room) => (
            <tr key={room.id}>
              <td>{room.id}</td>
              <td>{room.type}</td>
              <td>{room.status}</td>
              <td>{room.availability}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default RoomTable;
