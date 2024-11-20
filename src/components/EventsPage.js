import React from "react";
import eventsData from "../data/eventsData";
import EventsCard from "./EventsCard";
import "./styles/EventsPage.css";

function EventsPage() {
  return (
    <div className="page">
      <div className="events-grid">
        {eventsData.map((data, index) => (
          <EventsCard
            key={index}
            title={data.title}
            description={data.description}
            date={data.date}
            venue={data.venue}
            image={data.image}
            rules={data.rules}
            prizes={data.prizes}
            file={data.file}
          />
        ))}
      </div>
    </div>
  );
}

export default EventsPage;
