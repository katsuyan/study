class CrazyBot:
    def __init__(self):
        self.prob = []
        self.grid = [[False for i in range(100)] for j in range(100)]
        self.vx = [1, -1, 0, 0]
        self.vy = [0, 0, 1, -1]

    def get_probability(self, n, east, west, south, north):
        self.prob.append(east / 100.0)
        self.prob.append(west / 100.0)
        self.prob.append(south / 100.0)
        self.prob.append(north / 100.0)
        return self.dfs(50, 50, n)

    def dfs(self, x, y, n):
        if self.grid[x][y]:
            return 0
        if n == 0: return 1

        self.grid[50][50] = True
        ret = 0
        for i in range(4):
            ret += self.dfs(x + self.vx[i], y + self.vy[i], n - 1) * self.prob[i]
        self.grid[x][y] = False
        return ret

def main():
    crazy_bot = CrazyBot()
    ans = crazy_bot.get_probability(2, 25, 25, 25, 25)
    print ans

if __name__ == '__main__':
    main()
