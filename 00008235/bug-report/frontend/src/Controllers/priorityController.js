const colors = ["#b33a3a","#ff6700","#32cd32"]

export  default (priority) => {
    const level = ("Hihgh","Medium","Low")
    return{
        level:(level[priority-1]),
        color:colors[priority-1]
    }
}