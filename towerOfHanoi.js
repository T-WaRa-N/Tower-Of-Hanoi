let count = 0
let towerOfHanoi = disks =>{
    if(disks == 0){
        return disks
    }

    towerOfHanoi(disks - 1)
    towerOfHanoi(disks - 1)
    count++

    return count
}

console.log(towerOfHanoi(5))

module.exports = towerOfHanoi