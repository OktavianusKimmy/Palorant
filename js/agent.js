document.addEventListener("DOMContentLoaded", () => {
    const agents = document.querySelectorAll(".agent");

    agents.forEach((agent) => {
        const agentName = agent.querySelector(".agent-name");
        const agentDesc = agent.querySelector(".agent-desc");

        // Tampilkan agent-name saat agent di-hover
        agent.addEventListener("mouseenter", () => {
            if (agentName) {
                agentName.style.opacity = "1"; // Tampilkan agent-name
            }
        });

        // Sembunyikan agent-name saat mouse keluar dari agent
        agent.addEventListener("mouseleave", () => {
            if (agentName && !agentDesc.classList.contains("show")) {
                agentName.style.opacity = "0"; // Sembunyikan agent-name
            }
        });

        // Tampilkan agent-desc dan ubah opacity agent-name saat agent-name diklik
        if (agentName) {
            agentName.addEventListener("click", () => {
                if (agentDesc) {
                    agentDesc.classList.add("show"); // Tampilkan agent-desc
                }
                agentName.style.opacity = "0.5"; // Ubah opacity agent-name
            });
        }

        // Sembunyikan agent-desc saat mouse keluar dari agent-desc
        if (agentDesc) {
            agentDesc.addEventListener("mouseleave", () => {
                agentDesc.classList.remove("show"); // Sembunyikan agent-desc
                if (agentName) {
                    agentName.style.opacity = "0"; // Kembalikan agent-name ke awal
                }
            });
        }
    });
});