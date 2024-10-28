import React, { useState } from 'react';
import './TrainingSchedules.css'; // Importing the CSS file

const TrainingSchedules = () => {
  const [schedule, setSchedule] = useState({
    player: '',
    tasks: '',
    date: '',
  });

  const createSchedule = () => {
    // Placeholder for API to create training schedule
    alert(`Schedule Created for ${schedule.player} on ${schedule.date}!`);
    // Resetting the schedule after creation
    setSchedule({ player: '', tasks: '', date: '' });
  };

  return (
    <div className="training-schedules">
      <h2>Create Training Schedule</h2>
      <input
        type="text"
        placeholder="Player Name"
        className="schedule-input"
        value={schedule.player}
        onChange={(e) => setSchedule({ ...schedule, player: e.target.value })}
      />
      <textarea
        placeholder="Training Tasks"
        className="schedule-textarea"
        value={schedule.tasks}
        onChange={(e) => setSchedule({ ...schedule, tasks: e.target.value })}
      />
      <input
        type="date"
        className="schedule-date"
        value={schedule.date}
        onChange={(e) => setSchedule({ ...schedule, date: e.target.value })}
      />
      <button onClick={createSchedule} className="schedule-button">Create Schedule</button>
    </div>
  );
};

export default TrainingSchedules;
