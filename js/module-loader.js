async function loadModules() {
  const res = await fetch("/data/modules-index.json");
  const modules = await res.json();

  const container = document.getElementById("modules");

  for (const path of modules) {
    const meta = await fetch(`/modules/${path}/module.json`).then(r => r.json());

    if (!meta.enabled) continue;

    const link = document.createElement("a");
    link.href = `/modules/${path}/${meta.entry}`;
    link.textContent = meta.name;

    const item = document.createElement("div");
    item.appendChild(link);

    container.appendChild(item);
  }
}

loadModules();
