import { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function AdminDashboard() {
  const [announcements, setAnnouncements] = useState([
    { id: 1, title: 'Welcome to Our Creche', content: 'We are excited to have your child join our family!' },
    { id: 2, title: 'Holiday Schedule', content: 'Please check our events page for upcoming holidays.' }
  ]);

  const [events, setEvents] = useState([
    { id: 1, title: 'Christmas Party', description: 'Fun holiday celebration', images: [], date: '2025-12-20' },
    { id: 2, title: 'Sports Day', description: 'Outdoor activities and games', images: [], date: '2025-11-15' }
  ]);

  const [teachers, setTeachers] = useState([
    { id: 1, name: 'Ms. Sarah', image: '/teacher image folder/Camy Fourie.JPG', bio: 'Experienced early childhood educator' },
    { id: 2, name: 'Mr. John', image: '/teacher image folder/Teacher Lala.JPG', bio: 'Specializes in music and arts' },
    { id: 3, name: 'Mrs. Emily', image: '/teacher image folder/Teacher Thando.JPG', bio: 'Focuses on STEM activities' },
    { id: 4, name: 'Mr. David', image: '/teacher image folder/Warren Fourie.JPG', bio: 'Physical education expert' }
  ]);

  const [streamingCode, setStreamingCode] = useState('');

  const [editingAnnouncement, setEditingAnnouncement] = useState(null);
  const [editingEvent, setEditingEvent] = useState(null);

  const handleEditAnnouncement = (announcement) => {
    setEditingAnnouncement({ ...announcement });
  };

  const handleSaveAnnouncement = () => {
    setAnnouncements(announcements.map(ann =>
      ann.id === editingAnnouncement.id ? editingAnnouncement : ann
    ));
    setEditingAnnouncement(null);
  };

  const handleAddEventImage = (eventId, imageFile) => {
    const newEvents = events.map(event => {
      if (event.id === eventId) {
        return {
          ...event,
          images: [...event.images, { file: imageFile, url: URL.createObjectURL(imageFile) }]
        };
      }
      return event;
    });
    setEvents(newEvents);
  };

  const handleEditEvent = (event) => {
    setEditingEvent({ ...event });
  };

  const handleSaveEvent = () => {
    setEvents(events.map(evt =>
      evt.id === editingEvent.id ? editingEvent : evt
    ));
    setEditingEvent(null);
  };

  const handleRemoveTeacher = (teacherId) => {
    setTeachers(teachers.filter(teacher => teacher.id !== teacherId));
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav style={{position: 'absolute', top: '10px', right: '10px'}}>
          <Link to="/" style={{color: '#ff5722', textDecoration: 'none', fontSize: '1.2rem'}}>Home</Link>
        </nav>
        <div className="background-emojis">
          <span style={{position: 'absolute', top: '10%', left: '15%', fontSize: '4rem', opacity: 0.2}}>🖍️</span>
          <span style={{position: 'absolute', top: '30%', right: '20%', fontSize: '3rem', opacity: 0.2}}>⚽</span>
          <span style={{position: 'absolute', top: '50%', left: '50%', fontSize: '2rem', opacity: 0.2}}>📖</span>
          <span style={{position: 'absolute', top: '70%', left: '10%', fontSize: '3.5rem', opacity: 0.2}}>🏀</span>
          <span style={{position: 'absolute', top: '20%', right: '10%', fontSize: '2.5rem', opacity: 0.2}}>🧸</span>
          <span style={{position: 'absolute', top: '60%', right: '30%', fontSize: '4rem', opacity: 0.2}}>🐻</span>
          <span style={{position: 'absolute', top: '40%', left: '70%', fontSize: '3rem', opacity: 0.2}}>A</span>
          <span style={{position: 'absolute', top: '80%', left: '80%', fontSize: '2rem', opacity: 0.2}}>B</span>
          <span style={{position: 'absolute', top: '15%', left: '40%', fontSize: '3.5rem', opacity: 0.2}}>C</span>
          <span style={{position: 'absolute', top: '55%', left: '5%', fontSize: '2.5rem', opacity: 0.2}}>1</span>
          <span style={{position: 'absolute', top: '35%', right: '5%', fontSize: '3rem', opacity: 0.2}}>2</span>
          <span style={{position: 'absolute', top: '75%', left: '30%', fontSize: '4rem', opacity: 0.2}}>3</span>
        </div>
        <h1>Admin Dashboard</h1>

        <div style={{maxWidth: '1200px', margin: '0 auto', padding: '20px'}}>

          {/* Announcements Section */}
          <div style={{marginBottom: '40px', background: 'rgba(255, 255, 255, 0.9)', padding: '20px', borderRadius: '10px'}}>
            <h2>📢 Manage Announcements</h2>
            {announcements.map(announcement => (
              <div key={announcement.id} style={{border: '1px solid #ddd', padding: '15px', marginBottom: '15px', borderRadius: '5px'}}>
                {editingAnnouncement && editingAnnouncement.id === announcement.id ? (
                  <div>
                    <input
                      type="text"
                      value={editingAnnouncement.title}
                      onChange={(e) => setEditingAnnouncement({...editingAnnouncement, title: e.target.value})}
                      style={{width: '100%', padding: '8px', marginBottom: '10px'}}
                    />
                    <textarea
                      value={editingAnnouncement.content}
                      onChange={(e) => setEditingAnnouncement({...editingAnnouncement, content: e.target.value})}
                      rows="3"
                      style={{width: '100%', padding: '8px', marginBottom: '10px'}}
                    />
                    <button onClick={handleSaveAnnouncement} style={{backgroundColor: '#4CAF50', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '5px', marginRight: '10px'}}>Save</button>
                    <button onClick={() => setEditingAnnouncement(null)} style={{backgroundColor: '#f44336', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '5px'}}>Cancel</button>
                  </div>
                ) : (
                  <div>
                    <h3>{announcement.title}</h3>
                    <p>{announcement.content}</p>
                    <button onClick={() => handleEditAnnouncement(announcement)} style={{backgroundColor: '#ff5722', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '5px'}}>Edit</button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Events Section */}
          <div style={{marginBottom: '40px', background: 'rgba(255, 255, 255, 0.9)', padding: '20px', borderRadius: '10px'}}>
            <h2>🎉 Manage Events</h2>
            {events.map(event => (
              <div key={event.id} style={{border: '1px solid #ddd', padding: '15px', marginBottom: '15px', borderRadius: '5px'}}>
                {editingEvent && editingEvent.id === event.id ? (
                  <div>
                    <input
                      type="text"
                      value={editingEvent.title}
                      onChange={(e) => setEditingEvent({...editingEvent, title: e.target.value})}
                      style={{width: '100%', padding: '8px', marginBottom: '10px'}}
                    />
                    <textarea
                      value={editingEvent.description}
                      onChange={(e) => setEditingEvent({...editingEvent, description: e.target.value})}
                      rows="3"
                      style={{width: '100%', padding: '8px', marginBottom: '10px'}}
                    />
                    <input
                      type="date"
                      value={editingEvent.date}
                      onChange={(e) => setEditingEvent({...editingEvent, date: e.target.value})}
                      style={{width: '100%', padding: '8px', marginBottom: '10px'}}
                    />
                    <button onClick={handleSaveEvent} style={{backgroundColor: '#4CAF50', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '5px', marginRight: '10px'}}>Save</button>
                    <button onClick={() => setEditingEvent(null)} style={{backgroundColor: '#f44336', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '5px'}}>Cancel</button>
                  </div>
                ) : (
                  <div>
                    <h3>{event.title}</h3>
                    <p>{event.description}</p>
                    <p><strong>Date:</strong> {event.date}</p>
                    <div style={{marginTop: '10px'}}>
                      <strong>Images:</strong>
                      <input
                        type="file"
                        accept="image/*"
                        multiple
                        onChange={(e) => Array.from(e.target.files).forEach(file => handleAddEventImage(event.id, file))}
                        style={{marginLeft: '10px'}}
                      />
                      <div style={{display: 'flex', flexWrap: 'wrap', marginTop: '10px'}}>
                        {event.images.map((image, index) => (
                          <img key={index} src={image.url} alt={`Event ${index}`} style={{width: '100px', height: '100px', marginRight: '10px', marginBottom: '10px', objectFit: 'cover'}} />
                        ))}
                      </div>
                    </div>
                    <button onClick={() => handleEditEvent(event)} style={{backgroundColor: '#ff5722', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '5px', marginTop: '10px'}}>Edit Event</button>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Teachers Section */}
          <div style={{marginBottom: '40px', background: 'rgba(255, 255, 255, 0.9)', padding: '20px', borderRadius: '10px'}}>
            <h2>👩‍🏫 Manage Teachers</h2>
            {teachers.map(teacher => (
              <div key={teacher.id} style={{border: '1px solid #ddd', padding: '15px', marginBottom: '15px', borderRadius: '5px', display: 'flex', alignItems: 'center'}}>
                <img src={teacher.image} alt={teacher.name} style={{width: '80px', height: '80px', borderRadius: '50%', marginRight: '15px', objectFit: 'cover'}} />
                <div style={{flex: 1}}>
                  <h3>{teacher.name}</h3>
                  <p>{teacher.bio}</p>
                </div>
                <button onClick={() => handleRemoveTeacher(teacher.id)} style={{backgroundColor: '#f44336', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '5px'}}>Remove</button>
              </div>
            ))}
          </div>

          {/* Streaming Section */}
          <div style={{marginBottom: '40px', background: 'rgba(255, 255, 255, 0.9)', padding: '20px', borderRadius: '10px'}}>
            <h2>📺 Manage Streaming</h2>
            <label style={{display: 'block', marginBottom: '10px'}}>YouTube Live Embed Code:</label>
            <textarea
              value={streamingCode}
              onChange={(e) => setStreamingCode(e.target.value)}
              placeholder="Paste the YouTube embed code here..."
              rows="5"
              style={{width: '100%', padding: '8px', fontSize: '1rem', marginBottom: '10px'}}
            />
            <p style={{fontSize: '0.9rem', color: '#666'}}>
              To get the embed code: Go to YouTube → Share → Embed → Copy the iframe code
            </p>
          </div>

        </div>
      </header>
    </div>
  );
}

export default AdminDashboard;
