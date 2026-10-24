/* Per-application welcome popups for index.html.
   Link format: https://corvinerdos.com/?r=CODE
   Each entry: company, team, role, picks (exactly 3: title, href, why).
   Codes are random so the URL doesn't name the company. Anyone reading this
   file can still see the list, so remove entries once an application closes. */
window.INVITES = {
  "rvdui": {
    company: "Epic Games",
    team: "Fortnite Level Design",
    role: "Level Design Intern (R27413)",
    picks: [
      { title: "Axima (Zyndrax)", href: "project_axima.html",
        why: "UE5 level design from sketch to design markup to blockout, then all prop placement, set dressing and lighting with modular kits." },
      { title: "Apex LTM Analysis", href: "project_ltm_analysis.html",
        why: "Battle royale mode analysis: what keeps a mode in rotation, and an original mode built from the findings." },
      { title: "Alabastard", href: "project_alabastard.html",
        why: "Kitbasher Award at Unreal MegaJam 2022: a full UE game in one week, using a Kitbash3D city kit, with physics puzzles I designed and tuned." }
    ]
  },
  "yhcbb": {
    company: "Epic Games",
    team: "Level Design, unannounced Fortnite ecosystem project",
    role: "Level Design Intern",
    picks: [
      { title: "Axima (Zyndrax)", href: "project_axima.html",
        why: "A landmark-scale UE5 space: design markup, blockout, then my own dressing and lighting pass with modular kits." },
      { title: "Apex LTM Analysis", href: "project_ltm_analysis.html",
        why: "Battle royale and multiplayer design analysis, turned into an original mode with a test plan." },
      { title: "Alabastard", href: "project_alabastard.html",
        why: "Kitbasher Award at Unreal MegaJam 2022: levels dressed with a Kitbash3D city kit and physics puzzles, in one week." }
    ]
  },
  "650k6": {
    company: "Epic Games",
    team: "Fortnite Events",
    role: "Game Design Intern (R27441)",
    picks: [
      { title: "Bravo Media", href: "project_bravo_media.html",
        why: "A 10-minute real-time cinematic and an optimized digital double in Unreal, delivered on a 2-week turnaround." },
      { title: "Axima (Zyndrax)", href: "project_axima.html",
        why: "Level design on an open-world UE5 game with a 20+ person team, iterating with the project lead." },
      { title: "Cowboy Coots", href: "project_cowboy_coots.html",
        why: "Sole programmer in UE5: movement, the Reflex mechanic, the three-stage encounter loop and the dialogue engine." }
    ]
  },
  "3781z": {
    company: "Psyonix",
    team: "Rocket League",
    role: "Game Design Intern (R27409)",
    picks: [
      { title: "Salt Sweeper", href: "project_salt_sweeper.html",
        why: "Live-formula balance sheets for weapons, enemies and loot, tuned across 6 playtest cycles." },
      { title: "Apex LTM Analysis", href: "project_ltm_analysis.html",
        why: "Why competitive modes stay or disappear, plus an original mode with metrics to test." },
      { title: "Cowboy Coots", href: "project_cowboy_coots.html",
        why: "Code on a finished, award-winning UE5 project: I was the sole programmer." }
    ]
  },
  "wmx3v": {
    company: "TapBlaze",
    team: "Game Design",
    role: "Game Design Intern",
    picks: [
      { title: "Salt Sweeper", href: "project_salt_sweeper.html",
        why: "Balance spreadsheets, loot tables and an in-game economy, iterated across 6 playtest cycles." },
      { title: "Undisclosed Roguelike", href: "project_undisclosed_roguelike.html",
        why: "Designed the upgrade paths and upgrade economy across 10 wagon types and 14 perks." },
      { title: "Apex LTM Analysis", href: "project_ltm_analysis.html",
        why: "Live-game analysis: what keeps players coming back to a mode, scored on a rubric." }
    ]
  },
  "9dxw9": {
    company: "Insomniac Games",
    team: "Game Design",
    role: "Game Design Intern (R-125858)",
    picks: [
      { title: "Cowboy Coots", href: "project_cowboy_coots.html",
        why: "Combat setups: sole UE5 programmer on a three-stage encounter loop and difficulty curve, plus a Reflex time-slow dodge. 1st Place Visuals of 250." },
      { title: "Axima (Zyndrax)", href: "project_axima.html",
        why: "World authoring in UE5: design markup to blockout to my own dressing and lighting, with puzzle rooms cued by light instead of tutorials." },
      { title: "Alabastard", href: "project_alabastard.html",
        why: "A one-week story game in Unreal: physics puzzles, cinematics, mocap and MetaHumans. Won Epic's Kitbasher Award." }
    ]
  }
};
