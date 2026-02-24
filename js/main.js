/**
 * Portfolio – render functions, animations, and background effects.
 * Depends on: data.js (PROFILE, SKILLS, EXPERIENCE, etc.)
 */

function renderProfile(profile) {
  document.getElementById("displayName").textContent = profile.displayName;
  document.getElementById("username").textContent = profile.username;
  document.getElementById("bio").textContent = profile.bio;
  const stats = document.getElementById("stats");
  if (profile.statsLine) {
    stats.textContent = profile.statsLine;
    stats.style.display = "block";
  } else {
    stats.textContent = "";
    stats.style.display = "none";
  }

  const location = document.getElementById("location");
  location.innerHTML = `${pinIcon()}<span>${profile.location}</span>`;

  const phone = document.getElementById("phone");
  phone.innerHTML = `${phoneIcon()}<span>${profile.phone}</span>`;

  const email = document.getElementById("email");
  email.innerHTML = `${mailIcon()}<a href="mailto:${profile.email}">${profile.email}</a>`;

  const links = document.getElementById("profileLinks");
  links.innerHTML = "";
  profile.links.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `<a class="focus-ring link-label" href="${item.url}" target="_blank" rel="noreferrer">${linkIcon()}<span>${item.label}</span></a>`;
    links.appendChild(li);
  });

  const avatar = document.getElementById("avatar");
  const fallback = document.getElementById("avatarFallback");
  avatar.src = profile.avatarUrl;
  avatar.onerror = () => {
    avatar.style.display = "none";
    fallback.style.display = "grid";
  };
}

function renderRepositories(repositories) {
  const grid = document.getElementById("repoGrid");
  document.getElementById("repoCount").textContent = `${repositories.length} total`;

  if (!repositories.length) {
    grid.innerHTML = `<div class="empty-state">No repositories yet. Add repository objects in <code>REPOSITORIES</code>.</div>`;
    return;
  }

  grid.innerHTML = repositories
    .map((repo) => {
      const color = LANG_COLORS[repo.language] || "#8b949e";
      return `
      <article class="repo-card">
        <p class="repo-title">
          <a class="focus-ring" href="${repo.url}" target="_blank" rel="noreferrer">${repo.name}</a>
          <span class="vis">${repo.visibility}</span>
        </p>
        <p class="repo-desc">${repo.description}</p>
        <p class="repo-meta">
          <span><span class="lang-dot" style="color:${color}; background:${color}"></span>${repo.language}</span>
          <span><i class="fa-solid fa-star icon-accent" aria-hidden="true"></i>${repo.stars}</span>
          <span><i class="fa-solid fa-code-fork icon-soft" aria-hidden="true"></i>${repo.forks}</span>
          <span><i class="fa-regular fa-clock" aria-hidden="true"></i>${repo.updatedAt}</span>
        </p>
      </article>
    `;
    })
    .join("");
}

function renderMusic(playlistId, tracks) {
  const embedEl = document.getElementById("spotifyEmbed");
  const grid = document.getElementById("musicGrid");
  const countEl = document.getElementById("musicCount");

  const total = tracks.length + (playlistId ? 1 : 0);
  countEl.textContent = total ? `${tracks.length} track${tracks.length !== 1 ? "s" : ""}` : "—";

  if (playlistId) {
    const theme = "0"; // 0 = dark, 1 = light
    embedEl.innerHTML = `
      <iframe
        class="spotify-embed"
        src="https://open.spotify.com/embed/playlist/${playlistId}?utm_source=generator&theme=${theme}"
        width="100%"
        height="352"
        frameborder="0"
        allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
        title="Spotify playlist"
      ></iframe>`;
    embedEl.style.display = "block";
  } else {
    embedEl.innerHTML = "";
    embedEl.style.display = "none";
  }

  if (!tracks.length) {
    grid.innerHTML = `<div class="empty-state">No tracks yet. Add items to <code>SPOTIFY_TRACKS</code> in <code>js/data.js</code>.</div>`;
    return;
  }

  grid.innerHTML = tracks
    .map(
      (t) => `
      <article class="music-card">
        <a class="focus-ring music-card-link" href="${t.url}" target="_blank" rel="noopener noreferrer">
          <span class="music-card-artwork">
            ${t.artworkUrl
              ? `<img src="${t.artworkUrl}" alt="" loading="lazy" />`
              : `<img class="music-artwork-img" data-track-url="${t.url}" src="" alt="" loading="lazy" /><span class="music-card-placeholder music-artwork-fallback" aria-hidden="true"><i class="fa-solid fa-music"></i></span>`
            }
          </span>
          <span class="music-card-info">
            <span class="music-card-title">${t.title}</span>
            <span class="music-card-artist">${t.artist}</span>
            <span class="music-card-cta"><i class="fa-brands fa-spotify" aria-hidden="true"></i> Play on Spotify</span>
          </span>
        </a>
      </article>
    `
    )
    .join("");

  loadSpotifyArtwork();
}

function loadSpotifyArtwork() {
  const placeholders = document.querySelectorAll(".music-artwork-img[data-track-url]");
  placeholders.forEach((img) => {
    const url = img.getAttribute("data-track-url");
    if (!url) return;
    const oembedUrl = `https://open.spotify.com/oembed?url=${encodeURIComponent(url)}`;
    fetch(oembedUrl)
      .then((r) => r.json())
      .then((data) => {
        if (data.thumbnail_url) {
          img.src = data.thumbnail_url;
          img.onload = () => img.closest(".music-card-artwork")?.classList.add("loaded");
        }
      })
      .catch(() => {});
  });
}

function renderPosts(posts) {
  const grid = document.getElementById("postGrid");
  document.getElementById("postCount").textContent = `${posts.length} total`;

  if (!posts.length) {
    grid.innerHTML = `<div class="empty-state">No posts yet. Add post objects in <code>POSTS</code>.</div>`;
    return;
  }

  grid.innerHTML = posts
    .map(
      (post) => `
      <article class="post-card">
        <div class="post-header">
          <h4 class="post-title"><a class="focus-ring" href="${post.url}">${post.title}</a></h4>
          <time class="post-date" datetime="${post.date}"><i class="fa-regular fa-calendar" aria-hidden="true"></i>${formatDate(post.date)}</time>
        </div>
        <p class="post-summary">${post.summary}</p>
        <ul class="tags">
          ${post.tags.map((tag) => `<li>${tag}</li>`).join("")}
        </ul>
      </article>
    `
    )
    .join("");
}

function renderSkills(skills) {
  const cloud = document.getElementById("skillsCloud");
  document.getElementById("skillsCount").textContent = `${skills.length} skills`;

  if (!skills.length) {
    cloud.innerHTML = `<div class="empty-state">No skills yet. Add skills in <code>SKILLS</code>.</div>`;
    return;
  }

  cloud.innerHTML = skills
    .map(
      (skill) =>
        `<span class="skill-pill" style="--icon-color:${skill.color};"><i class="${skill.icon}" aria-hidden="true"></i>${skill.name}</span>`
    )
    .join("");
}

function renderExperience(experience) {
  const grid = document.getElementById("experienceGrid");
  document.getElementById("experienceCount").textContent = `${experience.length} roles`;

  if (!experience.length) {
    grid.innerHTML = `<div class="empty-state">No experience entries yet. Add entries in <code>EXPERIENCE</code>.</div>`;
    return;
  }

  grid.innerHTML = experience
    .map(
      (job) => `
      <article class="repo-card exp-card">
        <h4>${job.role}</h4>
        <p class="exp-org">${job.company} · ${job.period}</p>
        <ul class="exp-list">
          ${job.highlights.map((line) => `<li>${line}</li>`).join("")}
        </ul>
      </article>
    `
    )
    .join("");
}

function renderCredentials(education, certifications) {
  const educationList = document.getElementById("educationList");
  const certificationsList = document.getElementById("certificationsList");
  document.getElementById("credentialsCount").textContent = `${education.length + certifications.length} items`;

  educationList.innerHTML = education.length
    ? education
        .map(
          (item) =>
            `<li><i class="${item.icon}" style="color:${item.color}" aria-hidden="true"></i>${item.label}</li>`
        )
        .join("")
    : "<li>No education entries yet.</li>";

  certificationsList.innerHTML = certifications.length
    ? certifications
        .map(
          (item) =>
            `<li><i class="${item.icon}" style="color:${item.color}" aria-hidden="true"></i>${item.label}</li>`
        )
        .join("")
    : "<li>No certifications yet.</li>";
}

function initAnimations() {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const reveals = document.querySelectorAll(".reveal");

  if (!reducedMotion) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.16 }
    );
    reveals.forEach((el) => observer.observe(el));
  } else {
    reveals.forEach((el) => el.classList.add("is-in"));
  }

  if (window.matchMedia("(hover: hover)").matches && !reducedMotion) {
    const sheenTargets = document.querySelectorAll(".section, .repo-card, .post-card, .music-card");
    sheenTargets.forEach((card) => {
      card.addEventListener("mousemove", (event) => {
        const rect = card.getBoundingClientRect();
        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;
        card.style.setProperty("--mx", `${x}%`);
        card.style.setProperty("--my", `${y}%`);
      });
      card.addEventListener("mouseenter", () => card.classList.add("sheen"));
      card.addEventListener("mouseleave", () => card.classList.remove("sheen"));
    });
  }
}

function initMatrixBackground() {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const canvas = document.getElementById("matrixBg");
  if (!canvas || reducedMotion) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const glyphs = "01{}[]<>/\\|+-=*$#";
  const fontSize = 15;
  let width = 0;
  let height = 0;
  let columns = 0;
  let drops = [];

  const resize = () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
    columns = Math.floor(width / fontSize);
    drops = Array.from({ length: columns }, () => Math.floor(Math.random() * (height / fontSize)));
  };

  const step = () => {
    ctx.fillStyle = "rgba(13, 14, 17, 0.22)";
    ctx.fillRect(0, 0, width, height);

    ctx.font = `${fontSize}px "JetBrains Mono", monospace`;
    ctx.fillStyle = "rgba(154, 252, 127, 0.92)";

    for (let i = 0; i < columns; i += 1) {
      const char = glyphs[Math.floor(Math.random() * glyphs.length)];
      ctx.fillText(char, i * fontSize, drops[i] * fontSize);

      if (drops[i] * fontSize > height && Math.random() > 0.985) {
        drops[i] = 0;
      }
      drops[i] += 0.55;
    }
  };

  resize();
  window.addEventListener("resize", resize, { passive: true });
  setInterval(step, 78);
}

function initShootingStars() {
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const canvas = document.getElementById("starsBg");
  if (!canvas || reducedMotion) return;

  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  let width = 0;
  let height = 0;
  let stars = [];
  let lastSpawn = 0;
  let nextSpawnIn = 0;

  const rand = (min, max) => Math.random() * (max - min) + min;

  const resize = () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  };

  const resetSpawnTimer = (now) => {
    lastSpawn = now;
    nextSpawnIn = rand(8000, 15000);
  };

  const spawnStar = () => {
    if (stars.length >= 2) return;
    const startX = rand(width * 0.25, width * 0.9);
    const startY = rand(-40, height * 0.35);
    const len = rand(70, 150);
    const speed = rand(8, 13);
    const angle = rand(Math.PI * 0.15, Math.PI * 0.3);
    stars.push({
      x: startX,
      y: startY,
      len,
      speed,
      angle,
      alpha: rand(0.2, 0.4),
      life: rand(40, 64),
      age: 0
    });
  };

  const drawStar = (star) => {
    const trailX = Math.cos(star.angle) * star.len;
    const trailY = Math.sin(star.angle) * star.len;
    const fade = 1 - star.age / star.life;
    const alpha = star.alpha * fade;

    ctx.beginPath();
    ctx.moveTo(star.x, star.y);
    ctx.lineTo(star.x - trailX, star.y - trailY);
    ctx.strokeStyle = `rgba(200, 255, 196, ${alpha})`;
    ctx.lineWidth = 1.2;
    ctx.stroke();

    ctx.beginPath();
    ctx.arc(star.x, star.y, 1.3, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(226, 255, 220, ${alpha})`;
    ctx.fill();
  };

  const step = (now) => {
    ctx.clearRect(0, 0, width, height);

    if (now - lastSpawn >= nextSpawnIn) {
      spawnStar();
      resetSpawnTimer(now);
    }

    stars.forEach((star) => {
      star.x += Math.cos(star.angle) * star.speed;
      star.y += Math.sin(star.angle) * star.speed;
      star.age += 1;
      drawStar(star);
    });

    stars = stars.filter((star) => star.age < star.life && star.x < width + 200 && star.y < height + 200);
    window.requestAnimationFrame(step);
  };

  resize();
  resetSpawnTimer(performance.now());
  window.addEventListener("resize", resize, { passive: true });
  window.requestAnimationFrame(step);
}

function formatDate(input) {
  const date = new Date(input);
  return date.toLocaleDateString(undefined, {
    year: "numeric",
    month: "short",
    day: "numeric"
  });
}

function pinIcon() {
  return '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M10.5 1.75a.75.75 0 0 1 .75.75v2.19l2.03 2.03a.75.75 0 0 1-.53 1.28H9.56l-.53 5.06a.75.75 0 0 1-1.49.04L7 8.01H3.25a.75.75 0 0 1-.53-1.28L4.75 4.7V2.5a.75.75 0 0 1 1.5 0v2.5a.75.75 0 0 1-.22.53L5.06 6.5h5.88l-.97-.97a.75.75 0 0 1-.22-.53V2.5a.75.75 0 0 1 .75-.75Z"/></svg>';
}

function mailIcon() {
  return '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M1.75 3.5A1.75 1.75 0 0 1 3.5 1.75h9A1.75 1.75 0 0 1 14.25 3.5v9A1.75 1.75 0 0 1 12.5 14.25h-9A1.75 1.75 0 0 1 1.75 12.5v-9Zm1.5.31V12.5c0 .14.11.25.25.25h9a.25.25 0 0 0 .25-.25V3.81L8.48 7.24a.75.75 0 0 1-.96 0L3.25 3.81Zm.86-.56L8 6.34l3.89-3.09H4.11Z"/></svg>';
}

function phoneIcon() {
  return '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M2.75 1.5h2.2c.37 0 .69.26.75.62l.41 2.43a.75.75 0 0 1-.22.66L4.62 6.48a11.26 11.26 0 0 0 4.9 4.9l1.27-1.27a.75.75 0 0 1 .66-.22l2.43.4a.76.76 0 0 1 .62.76v2.2a.75.75 0 0 1-.75.75h-.5C6.48 14 2 9.52 2 2.75v-.5a.75.75 0 0 1 .75-.75Z"/></svg>';
}

function linkIcon() {
  return '<svg viewBox="0 0 16 16" aria-hidden="true"><path d="M7.775 3.275a3.25 3.25 0 0 1 4.596 4.596l-1.25 1.25a.75.75 0 0 1-1.06-1.06l1.25-1.25a1.75 1.75 0 0 0-2.475-2.475L7.586 5.586a.75.75 0 0 1-1.06-1.06l1.25-1.25Zm.699 7.139a.75.75 0 0 1 0 1.06l-1.25 1.25a3.25 3.25 0 1 1-4.596-4.596l1.25-1.25a.75.75 0 1 1 1.06 1.06l-1.25 1.25a1.75 1.75 0 1 0 2.475 2.475l1.25-1.25a.75.75 0 0 1 1.06 0Z"/><path d="M9.5 5.439a.75.75 0 0 1 0 1.06L6.5 9.5a.75.75 0 0 1-1.06-1.06l3-3a.75.75 0 0 1 1.06 0Z"/></svg>';
}

// Run on load
renderProfile(PROFILE);
renderSkills(SKILLS);
renderExperience(EXPERIENCE);
renderMusic(SPOTIFY_PLAYLIST_ID, SPOTIFY_TRACKS);
renderCredentials(EDUCATION, CERTIFICATIONS);
initMatrixBackground();
initShootingStars();
initAnimations();
