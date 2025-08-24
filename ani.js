document.addEventListener("DOMContentLoaded", function () {
    const input = document.querySelector(".input");
    const buttons = document.querySelectorAll(".button button");
    const haikei = document.querySelector("container");

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const value = this.id;

            if (value === "all") {
                input.value = ""; // 入力をクリア
            } else if (value === "=") {
                try {
                    input.value = eval(input.value.replace("×", "*").replace("÷", "/"));
                } catch {
                    input.value = "Error";
                }
            } else if (value === "plamai") {
                input.value = input.value ? String(-parseFloat(input.value)) : "";
            } else if (value === "%") {
                const match = input.value.match(/(\d+\.?\d*)$/);
                if (match) {
                    const num = parseFloat(match[0]);
                    input.value = input.value.replace(/\d+\.?\d*$/, num / 100);
                }
            } else {
                input.value += value;
            }
        });
    });

    // 🔥 キーボード操作の追加（←キーで1文字削除）
    document.addEventListener("keydown", function (event) {
        if (event.key === "Backspace" || event.key === "ArrowLeft") {
            input.value = input.value.slice(0, -1); // 末尾の1文字を削除
        }
        // 数字キー (0-9) の入力を処理
        if (event.key >= "0" && event.key <= "9") {
            input.value += event.key;
            adjustInputSize(); // サイズ調整
        }
    });

    
        // カラーピッカー要素を取得します
        const colorInput = document.getElementById('haikei');
        
        // 背景色を変更する対象の要素を取得します
        const container = document.querySelector('.container');
        
        // カラーピッカーの値が変更されたときに背景色を変更するイベントリスナーを追加します
        colorInput.addEventListener('input', (event) => {
            container.style.backgroundColor = event.target.value;
        });
});
