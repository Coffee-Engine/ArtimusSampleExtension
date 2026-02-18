addTool("test", class extends artimus.tool {
    mouseDown(gl, x, y, properties) {
        console.log(`Mouse at (${x},${y})`)
    }
})