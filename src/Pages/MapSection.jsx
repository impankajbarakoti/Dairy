import React from "react";

const MapSection = () => {
  return (
    <div className="">
      <section style={styles.mapSection}>
        <h2 style={styles.title}>Our Location</h2>
        <div style={styles.mapContainer}>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019994356603!2d-122.4194154846814!3d37.77492977975815!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064df1c0a0f%3A0x4f7b5c27b6e4f7e2!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1699876543210!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={styles.iframe}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
    </div>
  );
};

const styles = {
  mapSection: {
    padding: "60px 20px",
    textAlign: "center",
    backgroundColor: "#f9f9f9",
  },
  title: {
    fontSize: "2rem",
    marginBottom: "20px",
    color: "#333",
  },
  mapContainer: {
    width: "100%",
    maxWidth: "1500px",
    margin: "0 auto",
    borderRadius: "0px",
    overflow: "hidden",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  },
  iframe: {
    border: 0,
  },
};

export default MapSection;
