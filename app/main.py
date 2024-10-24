from flask import Flask, render_template

app = Flask(__name__)


@app.route('/move')
def move():
    return render_template('move.html')


@app.route('/apple')
def apple():
    return render_template('apple.html')


@app.route('/pear')
def pear():
    return render_template('pear.html')


@app.route('/grape')
def grape():
    return render_template('grape.html')


@app.route('/persimmon')
def persimon():
    return render_template('persimmon.html')


if __name__ == '__main__':
    # 배포 시에 debug=False, host='0.0.0.0', port=80
    # waitress 쓸 시 명령어 waitress-serve--listen=127.0.0.1:5000 main:app
    # gunicorn -w 4 -b 0.0.0.0:8000 main:app
    # '-w 4'는 4개의 워커 프로세스를 생성하겠다는 것, '-b 0.0.0.0:8000'는 모든 네트워크 인터페이스에서 8000번 포트로 바인딩
    # app.run(debug=True)
    app.run(debug=True)
