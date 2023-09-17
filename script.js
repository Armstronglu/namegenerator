document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('nameForm');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        // 获取用户输入
        const birthDate = document.getElementById('birthDate').value;
        const gender = document.getElementById('gender').value;
        const city = document.getElementById('city').value;
        // 生成名字（这里只是一个示例，你可以添加更复杂的逻辑）
        const name = generateName(birthDate, gender, city);
        // 显示结果
        document.getElementById('result').innerText = `生成的名字是：${name}`;
    });
});

function generateName(birthDate, gender, city) {
    // 这里添加生成名字的逻辑
    return "张三";  // 示例名字
}
