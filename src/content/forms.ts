/**
 * Form definitions shared by the UI (labels, inputs) and the server action
 * (validation). Editing a field here updates both sides.
 */
export type InquiryType = "contact" | "storage" | "camping" | "events";

export type FieldKind = "text" | "email" | "tel" | "textarea" | "select" | "date" | "number";

export type FieldDef = {
  name: string;
  label: string;
  kind: FieldKind;
  required?: boolean;
  options?: string[];
  placeholder?: string;
  autoComplete?: string;
  half?: boolean;
  max?: number;
};

export type FormConfig = {
  type: InquiryType;
  submitLabel: string;
  successTitle: string;
  successMessage: string;
  fields: FieldDef[];
};

export const forms: Record<InquiryType, FormConfig> = {
  contact: {
    type: "contact",
    submitLabel: "Send message",
    successTitle: "Thank you, your message is on its way.",
    successMessage:
      "A member of the Orwood team will reply by email or phone. For same-day questions, call the main resort at (925) 634-7181.",
    fields: [
      { name: "fullName", label: "Full name", kind: "text", required: true, half: true, autoComplete: "name", max: 120, placeholder: "Your name" },
      { name: "email", label: "Email", kind: "email", required: true, half: true, autoComplete: "email", max: 255, placeholder: "you@example.com" },
      { name: "phone", label: "Phone (optional)", kind: "tel", half: true, autoComplete: "tel", max: 30, placeholder: "(925) 000-0000" },
      {
        name: "subject",
        label: "Subject",
        kind: "select",
        required: true,
        half: true,
        options: [
          "General question",
          "Boat launch & marina",
          "Water sports & fishing",
          "RV camping",
          "Bar & Grill",
          "General Store",
          "Boat & RV storage",
          "Events & parties",
          "Something else",
        ],
      },
      { name: "message", label: "Message", kind: "textarea", required: true, max: 2000, placeholder: "How can we help?" },
    ],
  },
  storage: {
    type: "storage",
    submitLabel: "Request storage information",
    successTitle: "Your storage request has been received.",
    successMessage:
      "Our office will confirm unit availability, door sizes and current monthly rates with you. For urgent needs, call (925) 634-7181.",
    fields: [
      { name: "fullName", label: "Full name", kind: "text", required: true, half: true, autoComplete: "name", max: 120, placeholder: "Your name" },
      { name: "email", label: "Email", kind: "email", required: true, half: true, autoComplete: "email", max: 255, placeholder: "you@example.com" },
      { name: "phone", label: "Phone", kind: "tel", required: true, half: true, autoComplete: "tel", max: 30, placeholder: "(925) 000-0000" },
      {
        name: "storageType",
        label: "Storage type",
        kind: "select",
        required: true,
        half: true,
        options: ["Indoor boat storage", "Outdoor boat & trailer storage", "RV & trailer storage", "Not sure yet"],
      },
      {
        name: "unitSize",
        label: "Desired unit size",
        kind: "select",
        required: true,
        half: true,
        options: ["Under 25 ft", "25–30 ft", "30–40 ft", "40 ft and longer", "Not sure yet"],
      },
      {
        name: "launching",
        label: "Will you launch from Orwood?",
        kind: "select",
        half: true,
        options: ["Yes, regularly", "Occasionally", "Not sure yet"],
      },
      { name: "message", label: "Additional information", kind: "textarea", max: 2000, placeholder: "Boat or RV size, timing, anything else we should know" },
    ],
  },
  camping: {
    type: "camping",
    submitLabel: "Send reservation inquiry",
    successTitle: "Your camping inquiry has been received.",
    successMessage:
      "We'll check site availability for your dates and reply with options. Availability is confirmed by our team, not by this form.",
    fields: [
      { name: "fullName", label: "Full name", kind: "text", required: true, half: true, autoComplete: "name", max: 120, placeholder: "Your name" },
      { name: "email", label: "Email", kind: "email", required: true, half: true, autoComplete: "email", max: 255, placeholder: "you@example.com" },
      { name: "phone", label: "Phone", kind: "tel", required: true, half: true, autoComplete: "tel", max: 30, placeholder: "(925) 000-0000" },
      { name: "guests", label: "Number of guests", kind: "number", required: true, half: true, max: 3, placeholder: "2" },
      { name: "arrival", label: "Arrival date", kind: "date", required: true, half: true },
      { name: "departure", label: "Departure date", kind: "date", required: true, half: true },
      {
        name: "rigType",
        label: "Rig type",
        kind: "select",
        required: true,
        options: ["Motorhome", "Travel trailer", "Fifth wheel", "Tent or other"],
      },
      { name: "message", label: "Notes for our team", kind: "textarea", max: 2000, placeholder: "Rig length, hookup needs, boat on board, anything else" },
    ],
  },
  events: {
    type: "events",
    submitLabel: "Send event inquiry",
    successTitle: "Thank you for thinking of Orwood.",
    successMessage:
      "Our team will follow up to talk through your date, group size and menu options. To speak with us right away, call the Bar & Grill at (925) 634-2550.",
    fields: [
      { name: "fullName", label: "Full name", kind: "text", required: true, half: true, autoComplete: "name", max: 120, placeholder: "Your name" },
      { name: "email", label: "Email", kind: "email", required: true, half: true, autoComplete: "email", max: 255, placeholder: "you@example.com" },
      { name: "phone", label: "Phone", kind: "tel", required: true, half: true, autoComplete: "tel", max: 30, placeholder: "(925) 000-0000" },
      {
        name: "eventType",
        label: "Type of event",
        kind: "select",
        required: true,
        half: true,
        options: ["Private celebration", "Group dining", "Company or club gathering", "Other"],
      },
      { name: "preferredDate", label: "Preferred date", kind: "date", half: true },
      { name: "guests", label: "Estimated guests", kind: "number", required: true, half: true, max: 3, placeholder: "25" },
      { name: "message", label: "Tell us about your event", kind: "textarea", required: true, max: 2000, placeholder: "Occasion, timing, dietary needs, anything we should know" },
    ],
  },
};
