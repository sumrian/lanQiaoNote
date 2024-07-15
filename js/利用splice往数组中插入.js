let n = indexArr.map(v => `<li class="number ${v==this.currentPage ? 'active' : ''}">${v}</li>`)
        if(indexArr[1]!=2) n.splice(1,0,`<li class="number more">...</li>`)
        if(indexArr[indexArr.length-2]+1 != this.totalPages)  n.splice(-1,0,`<li class="number more">...</li>`)
        template = n.join('')