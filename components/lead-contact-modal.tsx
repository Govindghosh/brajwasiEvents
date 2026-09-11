"use client";

import { useState, useEffect, useRef, FormEvent } from "react";
import {
  X,
  MessageCircle,
  Phone,
  Sparkles,
  Send,
  Heart,
  Landmark,
  Building2,
  Globe2,
  MapPin,
  ChevronDown,
  Check,
  Calendar
} from "lucide-react";
import { site } from "@/data/site";

const EVENT_TYPES = [
  { id: "Wedding Decoration", label: "Wedding Decor", icon: Heart },
  { id: "Phool Bangla for Mandir", label: "Phool Bangla", icon: Landmark },
  { id: "Corporate Event", label: "Corporate Gala", icon: Building2 },
  { id: "Destination Event", label: "Destination", icon: Globe2 },
  { id: "Engagement / Reception", label: "Engagement", icon: Sparkles }
];

const LOCATIONS = [
  { id: "Vrindavan", label: "Vrindavan (Studio Base)" },
  { id: "Mathura", label: "Mathura" },
  { id: "Agra", label: "Agra" },
  { id: "Delhi", label: "Delhi" },
  { id: "Noida", label: "Noida / NCR" },
  { id: "Destination India", label: "Destination (Pan-India)" }
];

export function LeadContactModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [eventType, setEventType] = useState("Wedding Decoration");
  const [location, setLocation] = useState("Vrindavan");
  const [date, setDate] = useState("");
  const [isLocationOpen, setIsLocationOpen] = useState(false);

  const locationDropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const hasSeen = sessionStorage.getItem("brajwasi_inquiry_dismissed");
    if (!hasSeen) {
      const timer = setTimeout(() => {
        setIsOpen(true);
      }, 700);
      return () => clearTimeout(timer);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        locationDropdownRef.current &&
        !locationDropdownRef.current.contains(e.target as Node)
      ) {
        setIsLocationOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeModal = () => {
    setIsOpen(false);
    sessionStorage.setItem("brajwasi_inquiry_dismissed", "true");
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const message = `Hello Brajwasi Events, I would like to plan an event:\n- Name: ${name || "Client"}\n- Phone: ${phone || "Not provided"}\n- Event Type: ${eventType}\n- Location: ${location}\n- Target Date: ${date || "To be decided"}`;
    const url = `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
    closeModal();
  };

  if (!isOpen) return null;

  return (
    <div className="lead-modal-backdrop" onClick={closeModal} role="dialog" aria-modal="true">
      <div className="lead-modal-card" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="lead-modal-close"
          onClick={closeModal}
          aria-label="Close inquiry form"
        >
          <X size={18} aria-hidden="true" />
        </button>

        <div className="lead-modal-header">
          <div className="lead-modal-badge">
            <Sparkles size={12} aria-hidden="true" />
            <span>Event Consultation</span>
          </div>
          <h2>Plan Your Celebration</h2>
          <p>Share your event format and date. We will design the direction for you.</p>
        </div>

        <form onSubmit={handleSubmit} className="lead-modal-form">
          <div className="form-group">
            <label className="form-label">Select Event Format</label>
            <div className="newgen-chip-grid" role="radiogroup" aria-label="Event Type">
              {EVENT_TYPES.map((type) => {
                const Icon = type.icon;
                const isSelected = eventType === type.id;
                return (
                  <button
                    key={type.id}
                    type="button"
                    role="radio"
                    aria-checked={isSelected}
                    className={`newgen-chip ${isSelected ? "newgen-chip--active" : ""}`}
                    onClick={() => setEventType(type.id)}
                  >
                    <Icon size={14} aria-hidden="true" />
                    <span>{type.label}</span>
                    {isSelected && <Check size={13} className="newgen-chip__check" aria-hidden="true" />}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="client-name" className="form-label">Your Name</label>
              <input
                id="client-name"
                type="text"
                required
                className="newgen-input"
                placeholder="e.g. Radhika Sharma"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            <div className="form-group">
              <label htmlFor="client-phone" className="form-label">Phone / WhatsApp</label>
              <input
                id="client-phone"
                type="tel"
                required
                className="newgen-input"
                placeholder="+91 98765 43210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
          </div>

          <div className="form-row">
            <div className="form-group" ref={locationDropdownRef}>
              <label className="form-label">City / Destination</label>
              <div className="newgen-custom-select">
                <button
                  type="button"
                  className={`newgen-select-trigger ${isLocationOpen ? "newgen-select-trigger--open" : ""}`}
                  onClick={() => setIsLocationOpen((prev) => !prev)}
                  aria-haspopup="listbox"
                  aria-expanded={isLocationOpen}
                >
                  <span className="newgen-select-val">
                    <MapPin size={14} aria-hidden="true" />
                    <span>{LOCATIONS.find((l) => l.id === location)?.label || location}</span>
                  </span>
                  <ChevronDown
                    size={15}
                    className={`newgen-select-chevron ${isLocationOpen ? "newgen-select-chevron--rotated" : ""}`}
                    aria-hidden="true"
                  />
                </button>

                {isLocationOpen && (
                  <div className="newgen-select-dropdown" role="listbox">
                    {LOCATIONS.map((loc) => {
                      const isSelected = location === loc.id;
                      return (
                        <button
                          key={loc.id}
                          type="button"
                          role="option"
                          aria-selected={isSelected}
                          className={`newgen-select-option ${isSelected ? "newgen-select-option--active" : ""}`}
                          onClick={() => {
                            setLocation(loc.id);
                            setIsLocationOpen(false);
                          }}
                        >
                          <span>{loc.label}</span>
                          {isSelected && <Check size={14} aria-hidden="true" />}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="event-date" className="form-label">Approximate Date</label>
              <div className="newgen-date-wrap">
                <Calendar size={14} className="newgen-date-icon" aria-hidden="true" />
                <input
                  id="event-date"
                  type="date"
                  className="newgen-input newgen-input--date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>
            </div>
          </div>

          <button type="submit" className="button lead-modal-submit">
            <MessageCircle size={17} aria-hidden="true" />
            <span>Send Brief on WhatsApp</span>
            <Send size={15} aria-hidden="true" />
          </button>
        </form>

        <div className="lead-modal-footer">
          <a className="lead-modal-call" href={`tel:+91${site.phone}`}>
            <Phone size={14} aria-hidden="true" />
            <span>Direct Call: {site.phoneDisplay}</span>
          </a>
          <button type="button" className="lead-modal-skip" onClick={closeModal}>
            Explore website first
          </button>
        </div>
      </div>
    </div>
  );
}
