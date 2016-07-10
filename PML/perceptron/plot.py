import pandas as pd
import matplotlib.pyplot as plt
import numpy as np
import perceptron
import plot_decision_regions as pdr

df = pd.read_csv('http://archive.ics.uci.edu/ml/machine-learning-databases/iris/iris.data', header=None)
y = df.iloc[0:100, 4].values
y = np.where(y == 'Iris-setosa', -1, 1)
X = df.iloc[0:100, [0, 2]].values

ppn = perceptron.Perceptron(eta=0.1, n_iter=10)
ppn.fit(X, y)

pdr.plot_decision_regions(X, y, classifier=ppn)

plt.xlabel('sepal length [cm]')
plt.ylabel('petal length [cm]')
plt.legend(loc='upper left')

plt.show()
