import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe
                title="event-location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.234081234541!2d44.50386711570416!3d40.181603779393214!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x406abcfded02e68b%3A0x6f5276325a5fac5b!2s21+Amiryan+St%2C+Yerevan%2C+Armenia!5e0!3m2!1sen!2s!4v1561056381627!5m2!1sen!2s"
                width="100%"
                height="450"
                frameBorder="0"
                allowFullScreen
            >
            </iframe>

            <div className="location_tag">
                <div>Location</div>
            </div>
        </div>
    );
};

export default Location;