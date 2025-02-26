// index.js

// 1. 更新当前时间显示
function updateCurrentDate() {
    const dateElement = document.querySelector("p strong");
    const now = new Date();
    const formattedDate = now.toLocaleDateString("zh-CN", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
    dateElement.nextSibling.textContent = formattedDate;
}

// 2. 为标题添加点击交互，展开/收起内容
function toggleSections() {
    const headers = document.querySelectorAll("h2");
    headers.forEach(header => {
        header.style.cursor = "pointer";
        header.addEventListener("click", () => {
            const nextElement = header.nextElementSibling;
            if (nextElement.style.display === "none") {
                nextElement.style.display = "block";
            } else {
                nextElement.style.display = "none";
            }
        });
    });
}

// 3. 添加简单的表单提交功能（模拟参与方式的联系表单）
function setupContactForm() {
    const contactSection = document.querySelector("h2:nth-of-type(6)"); // "参与方式" 的 h2
    const formHTML = `
        <form id="contact-form" style="margin-top: 10px;">
            <label for="name">姓名：</label><br>
            <input type="text" id="name" name="name" required><br>
            <label for="email">邮箱：</label><br>
            <input type="email" id="email" name="email" required><br>
            <label for="message">留言：</label><br>
            <textarea id="message" name="message" rows="3"></textarea><br>
            <button type="submit">提交</button>
        </form>
    `;
    contactSection.insertAdjacentHTML("afterend", formHTML);

    const form = document.getElementById("contact-form");
    form.addEventListener("submit", (event) => {
        event.preventDefault();
        const name = form.querySelector("#name").value;
        const email = form.querySelector("#email").value;
        const message = form.querySelector("#message").value;

        alert(`感谢您的参与！\n姓名: ${name}\n邮箱: ${email}\n留言: ${message}`);
        form.reset();
    });
}

// 4. 初始化页面
document.addEventListener("DOMContentLoaded", () => {
    updateCurrentDate();
    toggleSections();
    setupContactForm();
});
