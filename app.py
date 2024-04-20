from flask import Flask, render_template, request

app = Flask(__name__)

@app.route("/")
def index():
    lang = request.args.get('lang', 'kz')
    if lang == "ru":
        return render_template("index_ru.html")
    else:
        return render_template("index_kz.html")

@app.errorhandler(404)
def page_not_found(e):
    lang = request.args.get('lang', 'kz')
    if lang == "ru":
        return render_template('404_ru.html'), 404
    else:
        return render_template('404_kz.html'), 404

@app.route("/rules")
def rules():
    lang = request.args.get('lang', 'kz')  # Получаем язык из параметров URL или используем 'kz' по умолчанию
    if lang == "ru":
        return render_template("rules_ru.html")
    else:  # По умолчанию используем казахский язык
        return render_template("rules_kz.html")


if __name__ == "__main__":
    app.run(debug=True)
