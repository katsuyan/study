## 補足
### python
今回はpython3.5.1で実行できることを確認しました。

### ライブラリ
pythonのPyYAMLライブラリを利用しています。

### 導入方法
#### pyenvを利用
```
git clone git://github.com/yyuu/pyenv.git ~/.pyenv
echo 'export PYENV_ROOT="$HOME/.pyenv"' >> ~/.bashrc
echo 'export PATH="$PYENV_ROOT/bin:$PATH"' >> ~/.bashrc
echo 'eval "$(pyenv init -)"' >> ~/.bashrc
```
シェルがbashでない場合は各自~./bashrcを書き換えて反映させてください。  
インストール後
```
pyenv install 3.5.1
pyenv global 3.5.1
```
などでバージョンを揃えてください。
#### PyYAMLのインストール
```
pip install pyyaml
```
