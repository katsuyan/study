class MazeMaker:
    def longest_path(self, maze, start_row, start_col, move_row, move_col):
        max_num = 0
        width = len(maze[0])
        height = len(maze)
        board = [[0 for i in range(height)] for j in range(width)]

        for i in range(height):
            for j in range(width):
                board [i][j] = -1

        board[start_row][start_col] = 0

        queue_x = [start_col]
        queue_y = [start_row]

        while(len(queue_x) != 0):
            x = queue_x.pop(0)
            y = queue_y.pop(0)

            for i in range(len(move_row)):
                next_x = x + move_col[i]
                next_y = y + move_row[i]

                if 0 <= next_x and next_x < width \
                and 0 <= next_y and next_y < height \
                and board[next_y][next_x] == -1 \
                and str(maze[next_y])[next_x] == ".":
                    board[next_y][next_x] = board[y][x] + 1
                    queue_x.append(next_x)
                    queue_y.append(next_y)

        for i in range(height):
            for j in range(width):
                if str(maze[i])[j] == "." and board[i][j] == -1:
                    return -1
                max_num = max(max_num, board[i][j]);

        return max_num


def main():
    maze_maker = MazeMaker()
    maze = ["...",\
            "...",\
            "..."]
    start_row = 0
    start_col = 1
    move_row = [1, 0, -1, 0]
    move_col = [0, 1, 0, -1]
    ans = maze_maker.longest_path(maze, start_row, start_col, move_row, move_col)
    print ans

if __name__ == '__main__':
    main()
