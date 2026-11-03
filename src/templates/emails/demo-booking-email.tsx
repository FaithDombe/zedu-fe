import * as React from "react";

export interface DemoBookingEmailProps {
  recipientName?: string;
  recipientEmail?: string;
  organisationName?: string;
  interests?: string;
  scheduledDate?: string;
  scheduledTime?: string;
  timeZone?: string;
  meetingUrl?: string;
  rescheduleUrl?: string;
  calendarGoogleUrl?: string;
  calendarOutlookUrl?: string;
  hostName?: string;
  hostRole?: string;
}

export function DemoBookingEmail({
  recipientName = "Alex",
  recipientEmail = "alex@example.edu",
  organisationName = "your organisation",
  interests = "Organising cohort communication and live classes in one platform",
  scheduledDate = "Thursday, 12 November 2026",
  scheduledTime = "2:00 PM – 2:30 PM",
  timeZone = "Africa/Lagos (GMT+1)",
  meetingUrl = "https://zedu.work/meet/demo-30m",
  rescheduleUrl = "https://zedu.work/contact-sales",
  calendarGoogleUrl = "https://calendar.google.com",
  calendarOutlookUrl = "https://outlook.live.com/calendar",
  hostName = "Zedu Solutions Team",
  hostRole = "Education & Cohort Partnerships",
}: DemoBookingEmailProps) {
  return (
    <div
      style={{
        backgroundColor: "#f4f5f7",
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
        margin: 0,
        padding: "40px 16px",
        color: "#1e293b",
        lineHeight: 1.6,
      }}
    >
      <table
        align="center"
        border={0}
        cellPadding={0}
        cellSpacing={0}
        width="100%"
        style={{
          maxWidth: "600px",
          backgroundColor: "#ffffff",
          borderRadius: "12px",
          overflow: "hidden",
          boxShadow: "0 4px 16px rgba(15, 23, 42, 0.08)",
          border: "1px solid #e2e8f0",
        }}
      >
        {/* Header Bar */}
        <tbody>
          <tr>
            <td
              style={{
                backgroundColor: "#6f4ef6",
                padding: "28px 36px",
                textAlign: "left",
              }}
            >
              <table border={0} cellPadding={0} cellSpacing={0} width="100%">
                <tbody>
                  <tr>
                    <td>
                      <span
                        style={{
                          fontSize: "24px",
                          fontWeight: 700,
                          color: "#ffffff",
                          letterSpacing: "-0.5px",
                        }}
                      >
                        Zedu
                      </span>
                    </td>
                    <td align="right">
                      <span
                        style={{
                          display: "inline-block",
                          backgroundColor: "rgba(255, 255, 255, 0.2)",
                          color: "#ffffff",
                          fontSize: "12px",
                          fontWeight: 600,
                          padding: "4px 10px",
                          borderRadius: "9999px",
                          letterSpacing: "0.4px",
                          textTransform: "uppercase",
                        }}
                      >
                        Demo Confirmed
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>

          {/* Main Content */}
          <tr>
            <td style={{ padding: "36px 36px 20px" }}>
              <h1
                style={{
                  fontSize: "22px",
                  fontWeight: 700,
                  color: "#0f172a",
                  margin: "0 0 16px",
                  lineHeight: 1.3,
                }}
              >
                Your 30-Minute Zedu Walkthrough is Booked
              </h1>

              <p
                style={{
                  fontSize: "15px",
                  color: "#334155",
                  margin: "0 0 16px",
                }}
              >
                Dear {recipientName},
              </p>

              <p
                style={{
                  fontSize: "15px",
                  color: "#334155",
                  margin: "0 0 24px",
                }}
              >
                Thank you for requesting a demonstration of Zedu for{" "}
                <strong>{organisationName}</strong>. We have reserved your
                30-minute session and look forward to showing you how Zedu can
                support your cohorts, educators, and learning teams.
              </p>

              {/* Booking Details Card */}
              <table
                border={0}
                cellPadding={0}
                cellSpacing={0}
                width="100%"
                style={{
                  backgroundColor: "#f8fafc",
                  borderRadius: "8px",
                  border: "1px solid #e2e8f0",
                  marginBottom: "28px",
                }}
              >
                <tbody>
                  <tr>
                    <td style={{ padding: "20px 24px" }}>
                      <table
                        border={0}
                        cellPadding={0}
                        cellSpacing={0}
                        width="100%"
                      >
                        <tbody>
                          <tr>
                            <td
                              style={{
                                width: "120px",
                                padding: "6px 0",
                                fontSize: "13px",
                                fontWeight: 600,
                                color: "#64748b",
                                textTransform: "uppercase",
                                letterSpacing: "0.5px",
                              }}
                            >
                              Date
                            </td>
                            <td
                              style={{
                                padding: "6px 0",
                                fontSize: "15px",
                                fontWeight: 600,
                                color: "#0f172a",
                              }}
                            >
                              {scheduledDate}
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{
                                width: "120px",
                                padding: "6px 0",
                                fontSize: "13px",
                                fontWeight: 600,
                                color: "#64748b",
                                textTransform: "uppercase",
                                letterSpacing: "0.5px",
                              }}
                            >
                              Time
                            </td>
                            <td
                              style={{
                                padding: "6px 0",
                                fontSize: "15px",
                                fontWeight: 600,
                                color: "#0f172a",
                              }}
                            >
                              {scheduledTime} ({timeZone})
                            </td>
                          </tr>
                          <tr>
                            <td
                              style={{
                                width: "120px",
                                padding: "6px 0",
                                fontSize: "13px",
                                fontWeight: 600,
                                color: "#64748b",
                                textTransform: "uppercase",
                                letterSpacing: "0.5px",
                              }}
                            >
                              Format
                            </td>
                            <td
                              style={{
                                padding: "6px 0",
                                fontSize: "15px",
                                color: "#0f172a",
                              }}
                            >
                              Live video call (30 minutes)
                            </td>
                          </tr>
                          {interests && (
                            <tr>
                              <td
                                style={{
                                  width: "120px",
                                  padding: "6px 0",
                                  fontSize: "13px",
                                  fontWeight: 600,
                                  color: "#64748b",
                                  textTransform: "uppercase",
                                  letterSpacing: "0.5px",
                                  verticalAlign: "top",
                                }}
                              >
                                Focus
                              </td>
                              <td
                                style={{
                                  padding: "6px 0",
                                  fontSize: "14px",
                                  color: "#334155",
                                }}
                              >
                                {interests}
                              </td>
                            </tr>
                          )}
                        </tbody>
                      </table>

                      {/* Primary Action Button */}
                      <div
                        style={{
                          marginTop: "18px",
                          paddingTop: "16px",
                          borderTop: "1px solid #e2e8f0",
                        }}
                      >
                        <a
                          href={meetingUrl}
                          style={{
                            display: "inline-block",
                            backgroundColor: "#6f4ef6",
                            color: "#ffffff",
                            fontSize: "14px",
                            fontWeight: 600,
                            padding: "10px 20px",
                            borderRadius: "6px",
                            textDecoration: "none",
                            marginRight: "10px",
                          }}
                        >
                          Join Call Link
                        </a>
                        <span style={{ fontSize: "13px", color: "#64748b" }}>
                          (Meeting opens at scheduled time)
                        </span>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* What to Expect / Agenda */}
              <h2
                style={{
                  fontSize: "17px",
                  fontWeight: 700,
                  color: "#0f172a",
                  margin: "0 0 12px",
                }}
              >
                What we will cover in your session
              </h2>

              <p
                style={{
                  fontSize: "14px",
                  color: "#475569",
                  margin: "0 0 16px",
                }}
              >
                Our goal is to give you a clear, honest walkthrough tailored to
                your educational model. We will cover:
              </p>

              <table
                border={0}
                cellPadding={0}
                cellSpacing={0}
                width="100%"
                style={{ marginBottom: "24px" }}
              >
                <tbody>
                  <tr>
                    <td
                      style={{
                        padding: "10px 0",
                        verticalAlign: "top",
                        width: "28px",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          width: "20px",
                          height: "20px",
                          lineHeight: "20px",
                          textAlign: "center",
                          backgroundColor: "#ede9fe",
                          color: "#6f4ef6",
                          borderRadius: "4px",
                          fontSize: "12px",
                          fontWeight: 700,
                        }}
                      >
                        1
                      </span>
                    </td>
                    <td style={{ padding: "8px 0 8px 8px" }}>
                      <strong style={{ fontSize: "14px", color: "#0f172a" }}>
                        Unified Workspace Tour (10 mins):
                      </strong>
                      <span
                        style={{
                          fontSize: "14px",
                          color: "#475569",
                          display: "block",
                          marginTop: "2px",
                        }}
                      >
                        See how channels, direct messages, files, and live
                        audio/video rooms work together without switching
                        between scattered tools.
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td
                      style={{
                        padding: "10px 0",
                        verticalAlign: "top",
                        width: "28px",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          width: "20px",
                          height: "20px",
                          lineHeight: "20px",
                          textAlign: "center",
                          backgroundColor: "#ede9fe",
                          color: "#6f4ef6",
                          borderRadius: "4px",
                          fontSize: "12px",
                          fontWeight: 700,
                        }}
                      >
                        2
                      </span>
                    </td>
                    <td style={{ padding: "8px 0 8px 8px" }}>
                      <strong style={{ fontSize: "14px", color: "#0f172a" }}>
                        Custom Fit for Your Cohorts (10 mins):
                      </strong>
                      <span
                        style={{
                          fontSize: "14px",
                          color: "#475569",
                          display: "block",
                          marginTop: "2px",
                        }}
                      >
                        How other schools and bootcamps manage mentor-student
                        communication, attendance, and collaborative group
                        discussions.
                      </span>
                    </td>
                  </tr>

                  <tr>
                    <td
                      style={{
                        padding: "10px 0",
                        verticalAlign: "top",
                        width: "28px",
                      }}
                    >
                      <span
                        style={{
                          display: "inline-block",
                          width: "20px",
                          height: "20px",
                          lineHeight: "20px",
                          textAlign: "center",
                          backgroundColor: "#ede9fe",
                          color: "#6f4ef6",
                          borderRadius: "4px",
                          fontSize: "12px",
                          fontWeight: 700,
                        }}
                      >
                        3
                      </span>
                    </td>
                    <td style={{ padding: "8px 0 8px 8px" }}>
                      <strong style={{ fontSize: "14px", color: "#0f172a" }}>
                        Answers, Pricing & Rollout (10 mins):
                      </strong>
                      <span
                        style={{
                          fontSize: "14px",
                          color: "#475569",
                          display: "block",
                          marginTop: "2px",
                        }}
                      >
                        Direct answers to your questions regarding data privacy,
                        student onboarding, and pricing plans for your group
                        size.
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* How to Prepare */}
              <div
                style={{
                  backgroundColor: "#eff6ff",
                  borderLeft: "4px solid #3b82f6",
                  padding: "14px 18px",
                  borderRadius: "0 6px 6px 0",
                  marginBottom: "28px",
                }}
              >
                <strong
                  style={{
                    fontSize: "14px",
                    color: "#1e3a8a",
                    display: "block",
                    marginBottom: "4px",
                  }}
                >
                  How to prepare:
                </strong>
                <p style={{ fontSize: "13px", color: "#1e40af", margin: 0 }}>
                  Feel free to forward this invitation to team members or
                  academic leads who should join. If you have specific workflow
                  questions or current platforms you wish to replace, feel free
                  to bring them to the session.
                </p>
              </div>

              {/* Calendar Quick Links */}
              <p
                style={{
                  fontSize: "14px",
                  color: "#334155",
                  margin: "0 0 12px",
                }}
              >
                Add this meeting to your calendar:
              </p>
              <div style={{ marginBottom: "28px" }}>
                <a
                  href={calendarGoogleUrl}
                  style={{
                    display: "inline-block",
                    padding: "8px 14px",
                    border: "1px solid #cbd5e1",
                    borderRadius: "6px",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "#334155",
                    textDecoration: "none",
                    marginRight: "8px",
                    marginBottom: "8px",
                  }}
                >
                  Google Calendar
                </a>
                <a
                  href={calendarOutlookUrl}
                  style={{
                    display: "inline-block",
                    padding: "8px 14px",
                    border: "1px solid #cbd5e1",
                    borderRadius: "6px",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "#334155",
                    textDecoration: "none",
                    marginRight: "8px",
                    marginBottom: "8px",
                  }}
                >
                  Outlook Calendar
                </a>
                <a
                  href={rescheduleUrl}
                  style={{
                    display: "inline-block",
                    padding: "8px 14px",
                    borderRadius: "6px",
                    fontSize: "13px",
                    fontWeight: 500,
                    color: "#64748b",
                    textDecoration: "underline",
                    marginBottom: "8px",
                  }}
                >
                  Need to reschedule?
                </a>
              </div>

              {/* Sign-off */}
              <p
                style={{
                  fontSize: "15px",
                  color: "#334155",
                  margin: "0 0 6px",
                }}
              >
                Warm regards,
              </p>
              <p
                style={{
                  fontSize: "15px",
                  fontWeight: 700,
                  color: "#0f172a",
                  margin: "0 0 2px",
                }}
              >
                {hostName}
              </p>
              <p style={{ fontSize: "13px", color: "#64748b", margin: 0 }}>
                {hostRole} · Zedu
              </p>
            </td>
          </tr>

          {/* Footer */}
          <tr>
            <td
              style={{
                backgroundColor: "#f8fafc",
                borderTop: "1px solid #e2e8f0",
                padding: "24px 36px",
                fontSize: "12px",
                color: "#64748b",
                lineHeight: 1.5,
              }}
            >
              <p style={{ margin: "0 0 8px" }}>
                You received this confirmation because a demo was booked for{" "}
                <strong>{recipientEmail}</strong> at{" "}
                <a
                  href="https://zedu.work"
                  style={{ color: "#6f4ef6", textDecoration: "none" }}
                >
                  zedu.work
                </a>
                .
              </p>
              <p style={{ margin: 0 }}>
                © {new Date().getFullYear()} Zedu. All rights reserved. ·{" "}
                <a
                  href="https://zedu.work/policy"
                  style={{ color: "#64748b", textDecoration: "underline" }}
                >
                  Privacy Policy
                </a>{" "}
                ·{" "}
                <a
                  href="https://zedu.work/terms-of-service"
                  style={{ color: "#64748b", textDecoration: "underline" }}
                >
                  Terms of Service
                </a>
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
