window.ATLAS_DATA = {
  "meta": {
    "name": "Game Telemetry Transparency Atlas",
    "version": "0.1.0",
    "as_of": "2026-11-21",
    "tagline": "Evidence over outrage. Players over profiling.",
    "note": "Rows are evidence findings, not a count of games. Policies indicate disclosed possibilities, not independently measured packets."
  },
  "sources": [
    {
      "id": "MS-PRIV-2026",
      "title": "Microsoft Privacy Statement, Xbox section",
      "url": "https://www.microsoft.com/en-us/privacy/privacystatement",
      "publisher": "Microsoft",
      "kind": "Official privacy disclosure",
      "checked": "2026-11-21",
      "notes": "Describes Xbox data available to publishers, including account identifiers, gameplay sessions and moves made in-game."
    },
    {
      "id": "MS-DIAG-2026",
      "title": "Data collection summary for Xbox",
      "url": "https://www.microsoft.com/en-us/privacy/data-collection-xbox",
      "publisher": "Microsoft",
      "kind": "Official technical/privacy disclosure",
      "checked": "2026-11-21",
      "notes": "Describes required and optional Xbox diagnostic data and privacy controls."
    },
    {
      "id": "KING-PRIV-2026",
      "title": "King Privacy Policy",
      "url": "https://www.king.com/privacyPolicy",
      "publisher": "King",
      "kind": "Official privacy disclosure",
      "checked": "2026-11-21",
      "notes": "Describes AI personalization of gameplay and tailored offers using playing habits."
    },
    {
      "id": "ZEN-PRIV-2026",
      "title": "ZeniMax Media Privacy Policy",
      "url": "https://www.zenimax.com/en/legal/privacy-policy",
      "publisher": "ZeniMax Media",
      "kind": "Official privacy disclosure",
      "checked": "2026-11-21",
      "notes": "Describes inferences about preferences, behavior, attitudes and abilities."
    },
    {
      "id": "ACT-PRIV-2025",
      "title": "Activision Privacy Policy",
      "url": "https://www.activision.com/legal/privacy-policy",
      "publisher": "Activision",
      "kind": "Official privacy disclosure",
      "checked": "2026-11-21",
      "notes": "Describes gameplay, communications and monitoring of certain programs under applicable agreements."
    },
    {
      "id": "ACT-COD-SEC",
      "title": "Call of Duty Security and Enforcement Policy",
      "url": "https://support.activision.com/content/atvi/support/web/en/articles/call-of-duty-security-and-enforcement-policy.html",
      "publisher": "Activision",
      "kind": "Official game-security disclosure",
      "checked": "2026-11-21",
      "notes": "Documents anti-cheat methods and enforcement."
    },
    {
      "id": "BLIZ-PRIV",
      "title": "Blizzard Privacy World",
      "url": "https://www.blizzard.com/en-us/privacy",
      "publisher": "Blizzard Entertainment",
      "kind": "Official privacy disclosure",
      "checked": "2026-11-21",
      "notes": "Describes collection and use of game data."
    },
    {
      "id": "BLIZ-LEGAL",
      "title": "Blizzard Entertainment Online Privacy Policy",
      "url": "https://www.blizzard.com/en-us/legal/51952c9b-bfd5-4790-a2ef-a1c8e912adaf/blizzard-entertainment-online-privacy-policy",
      "publisher": "Blizzard Entertainment",
      "kind": "Official privacy disclosure",
      "checked": "2026-11-21",
      "notes": "Describes game data sharing; revisit for the current governing version."
    },
    {
      "id": "ROCK-PRIV-2026",
      "title": "Rockstar Games Privacy Policy",
      "url": "https://www.rockstargames.com/privacy",
      "publisher": "Rockstar Games",
      "kind": "Official privacy disclosure",
      "checked": "2026-11-21",
      "notes": "Describes profile inferences and advertising-related disclosures."
    },
    {
      "id": "FORZA-DRIVATAR",
      "title": "Forza Support: Difficulty, Assists and Drivatars",
      "url": "https://support.forza.net/hc/en-us/articles/360005363194-FM7-Difficulty-Assists-and-Drivatars",
      "publisher": "Turn 10 Studios / Forza Support",
      "kind": "Official game feature documentation",
      "checked": "2026-11-21",
      "notes": "Documents Forza Drivatar technology."
    },
    {
      "id": "MS-MOJANG",
      "title": "Microsoft Services Agreement, Mojang section",
      "url": "https://www.microsoft.com/en-US/servicesagreement",
      "publisher": "Microsoft",
      "kind": "Official terms",
      "checked": "2026-11-21",
      "notes": "Provides Minecraft/Mojang service context, not a telemetry-specific claim."
    },
    {
      "id": "LENS-REPORT-2026",
      "title": "Secondary report of anonymous GTA VI Lens allegation",
      "url": "https://www.getrekt.com/news/rumour-mill-gta-6-lens-vantage-fired-rockstar-engineer/",
      "publisher": "GetRekt",
      "kind": "Unverified allegation coverage",
      "checked": "2026-11-21",
      "notes": "Describes an anonymous allegation, not technical verification."
    }
  ],
  "records": [
    {
      "id": "xbox-publisher-sharing",
      "title": "Xbox gameplay data available to publishers",
      "company": "Microsoft",
      "unit": "Xbox network",
      "status": "Official disclosure",
      "scope": "Platform policy",
      "summary": "Xbox discloses that publishers of network-connected games or apps may receive account identifiers, gameplay sessions, specific in-game actions, time played, communications, and other information.",
      "what_is_shown": "The Xbox privacy statement documents categories available to publishers.",
      "what_is_not_shown": "Not evidence that every Xbox game records all inputs, derives psychological scores, or uses Lens.",
      "examples": [
        "Xbox network games (platform-level)"
      ],
      "topics": [
        "Gameplay behavior",
        "Identifiers",
        "Sharing"
      ],
      "testing": "Choose one game and compare its network connections with consent and within its terms.",
      "sources": [
        "MS-PRIV-2026"
      ]
    },
    {
      "id": "xbox-console-diagnostics",
      "title": "Xbox required versus optional diagnostics",
      "company": "Microsoft",
      "unit": "Xbox console",
      "status": "Official disclosure",
      "scope": "Platform policy",
      "summary": "Microsoft distinguishes required and optional Xbox console diagnostic data.",
      "what_is_shown": "Published categories of console diagnostics and privacy controls.",
      "what_is_not_shown": "Cannot infer full per-title payloads or behavioral psychometrics.",
      "examples": [
        "Xbox console operating environment"
      ],
      "topics": [
        "Diagnostics",
        "Identifiers"
      ],
      "testing": "Review console diagnostics settings and categories before testing a specific game.",
      "sources": [
        "MS-DIAG-2026"
      ]
    },
    {
      "id": "king-ai-personalization",
      "title": "King AI-driven gameplay and offer personalization",
      "company": "Microsoft",
      "unit": "King",
      "status": "Official disclosure",
      "scope": "Publisher policy",
      "summary": "King discloses AI-based gameplay personalization and offers tailored from progress, playing habits and preferences.",
      "what_is_shown": "Policy describes adjustments to difficulty, booster recommendations and personalized offers.",
      "what_is_not_shown": "Not a title-by-title audit, diagnosis, or evidence of insurance/credit sharing.",
      "examples": [
        "Candy Crush Saga (publisher example)",
        "Other King titles: applicability varies"
      ],
      "topics": [
        "AI personalization",
        "Monetization",
        "Gameplay behavior"
      ],
      "testing": "Compare consenting test accounts over time; don't infer causation from one offer.",
      "sources": [
        "KING-PRIV-2026"
      ]
    },
    {
      "id": "zenimax-inferences",
      "title": "ZeniMax behavioral and ability inferences",
      "company": "Microsoft",
      "unit": "ZeniMax / Bethesda",
      "status": "Official disclosure",
      "scope": "Publisher policy",
      "summary": "ZeniMax discloses inferences reflecting user preferences, characteristics, behavior, attitudes and abilities related to its services.",
      "what_is_shown": "An officially documented inference category across covered services.",
      "what_is_not_shown": "No proof any title computes impulse-control scores or shares credit-risk profiles.",
      "examples": [
        "The Elder Scrolls Online (publisher example)",
        "Fallout / Starfield (publisher examples)"
      ],
      "topics": [
        "Behavioral inference",
        "Identifiers",
        "Advertising"
      ],
      "testing": "Request disclosed inference categories about your own account where applicable.",
      "sources": [
        "ZEN-PRIV-2026"
      ]
    },
    {
      "id": "activision-monitoring",
      "title": "Activision gameplay and device monitoring",
      "company": "Microsoft",
      "unit": "Activision",
      "status": "Official disclosure",
      "scope": "Publisher policy + game policy",
      "summary": "Activision discloses monitoring of gameplay, communications and certain programs alongside games for security and enforcement.",
      "what_is_shown": "General policy and Call of Duty enforcement material describe anti-cheat collection and behavior-based detection.",
      "what_is_not_shown": "Does not show resale to financial institutions or association with Lens.",
      "examples": [
        "Call of Duty franchise"
      ],
      "topics": [
        "Anti-cheat",
        "Device monitoring",
        "Gameplay behavior"
      ],
      "testing": "Review anti-cheat terms; don't inject, bypass, intercept protected sessions or tamper.",
      "sources": [
        "ACT-PRIV-2025",
        "ACT-COD-SEC"
      ]
    },
    {
      "id": "blizzard-game-data",
      "title": "Blizzard game-data personalization and sharing",
      "company": "Microsoft",
      "unit": "Blizzard Entertainment",
      "status": "Official disclosure",
      "scope": "Publisher policy",
      "summary": "Blizzard describes use of game data for relevant item suggestions and data handling or sharing in its policies.",
      "what_is_shown": "Official privacy documents describe game data as input to personalization and some sharing.",
      "what_is_not_shown": "Not proof of exact collection in each title or lending-related psychometric scoring.",
      "examples": [
        "World of Warcraft",
        "Diablo",
        "Overwatch"
      ],
      "topics": [
        "Gameplay behavior",
        "Personalization",
        "Sharing"
      ],
      "testing": "Check current Battle.net privacy controls and request available data.",
      "sources": [
        "BLIZ-PRIV",
        "BLIZ-LEGAL"
      ]
    },
    {
      "id": "rockstar-profiling",
      "title": "Rockstar advertising-related profile inferences",
      "company": "Take-Two",
      "unit": "Rockstar Games",
      "status": "Official disclosure",
      "scope": "Publisher policy",
      "summary": "Rockstar discloses profile inferences for personalized offers and advertising-related sharing or sale as defined in privacy laws.",
      "what_is_shown": "Policy discusses identifiers, activity and profile inferences shared with advertising providers.",
      "what_is_not_shown": "Does not prove Lens, millisecond input capture, internal architecture, or financial-service recipients.",
      "examples": [
        "GTA Online (publisher example)",
        "Red Dead Online (publisher example)"
      ],
      "topics": [
        "Behavioral inference",
        "Advertising",
        "Sharing"
      ],
      "testing": "Request your records and categories of recipients through Take-Two's data-rights portal.",
      "sources": [
        "ROCK-PRIV-2026"
      ]
    },
    {
      "id": "forza-drivatar",
      "title": "Forza Motorsport 5 and Drivatar learning",
      "company": "Microsoft",
      "unit": "Turn 10 Studios / Forza",
      "status": "Documented game feature",
      "scope": "Specific game feature",
      "summary": "Forza documented learning from driving behavior to create Drivatar racing opponents.",
      "what_is_shown": "An official description of a game feature representing player driving styles.",
      "what_is_not_shown": "Not evidence of sensitive psychometrics or resale of player traits.",
      "examples": [
        "Forza Motorsport 5"
      ],
      "topics": [
        "Gameplay behavior",
        "AI personalization"
      ],
      "testing": "Review period-specific feature documentation rather than assuming all Forza releases behave identically.",
      "sources": [
        "FORZA-DRIVATAR"
      ]
    },
    {
      "id": "minecraft-platform-context",
      "title": "Minecraft and Xbox platform-policy context",
      "company": "Microsoft",
      "unit": "Mojang / Minecraft",
      "status": "Context only",
      "scope": "Platform context",
      "summary": "Minecraft services are referenced in Microsoft's agreement; Xbox disclosures may apply in Xbox-connected contexts.",
      "what_is_shown": "Ownership and service context, plus general platform privacy terms.",
      "what_is_not_shown": "NOT evidence of a Minecraft-specific input tracking or psychological profiling pipeline.",
      "examples": [
        "Minecraft"
      ],
      "topics": [
        "Identifiers",
        "Gameplay behavior"
      ],
      "testing": "Audit Java and Bedrock separately, recording edition, platform, network and account context.",
      "sources": [
        "MS-MOJANG",
        "MS-PRIV-2026"
      ]
    },
    {
      "id": "gta6-lens-allegation",
      "title": "GTA VI and the unverified Lens allegation",
      "company": "Take-Two",
      "unit": "Rockstar Games / alleged Lens",
      "status": "Unverified allegation",
      "scope": "Unverified allegation",
      "summary": "An anonymous 2026 post alleges a Take-Two system called Lens builds identifiable psychological profiles and sends them to a supposed Vantage Analytics entity.",
      "what_is_shown": "A report exists that the allegations were made; no authenticated technical evidence is established.",
      "what_is_not_shown": "No verified Lens implementation, game coverage, internal API records or recipient identities.",
      "examples": [
        "Grand Theft Auto VI (alleged)"
      ],
      "topics": [
        "Behavioral inference",
        "Identifiers",
        "Sharing"
      ],
      "testing": "Seek authenticated technical documentation or official confirmation before labeling any game a Lens user.",
      "sources": [
        "LENS-REPORT-2026"
      ]
    }
  ]
};
