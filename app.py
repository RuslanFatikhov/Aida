from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def index():
    lang = request.args.get('lang', 'kz')  # Получаем язык из параметров URL или используем 'kz' по умолчанию
    if lang == "ru":
        return render_template("index_ru.html")
    else:  # По умолчанию используем казахский язык
        return render_template("index_kz.html")

if __name__ == "__main__":
    app.run(debug=True)
