const args = process.argv.slice(2);
const [ x, y, length, board ] = args;

// choose the first available space
for(let i = 0; i < x * y; i++)
{
    if(board[i]==="_") {
        console.log(i);
        return;
    }
}
