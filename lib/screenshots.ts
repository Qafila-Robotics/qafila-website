// Product screenshots from the Qafila Fleet dashboard.
//
// Every slot renders a visible "[TBD screenshot]" placeholder until a real capture is set here.
// To add one: save the capture as public/screenshots/<key>.png (1600 px wide, 16:10 or 16:9,
// under 200 KB, no customer data, no tokens or IPs in view), then set the path below.
// Example: fleet: "/screenshots/fleet.png",
export const SCREENSHOTS: Record<string, string | null> = {
  fleet: null, // Fleet page: card grid with camera tiles
  drawer: null, // Robot details drawer
  camera: null, // Live camera tile
  control: null, // Take-control confirmation (lease + TOTP + safety check)
  incidents: null, // Incidents list / alert message
  capsule: null, // Time Capsule timeline tab
  wall: null, // Wall view on an ops-room screen
  copilot: null, // Fleet copilot answering a question
  map: null, // Fleet map with robot poses and named places
  missions: null, // Mission log and daily figures
  addRobot: null, // Add robot page with the onboarding command
};

// Install videos per robot class (Robots page). Same rule: a visible "[TBD video]" slot until set.
// Save as public/videos/<key>.mp4 (H.264, muted, under 8 MB) with a poster public/videos/<key>.jpg.
export const VIDEOS: Record<string, { src: string; poster: string } | null> = {
  humanoid: null,
  quadruped: null,
  drone: null,
  ground: null,
};
