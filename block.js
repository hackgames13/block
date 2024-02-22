class website {
    getInfo() {
        return {
            id: 'website',
            name: 'website',
            color1: '#00ffff',
            color2: '#00ffff',
            blocks: [
                {
                    opcode: 'alertname',
                    blockType: Scratch.BlockType.COMMAND,
                    text: 'alert',
                    disableMonitor: true,
                    arguments: {
                        STR: {
                          type: Scratch.ArgumentType.STRING,
                          defaultValue: "hello you player!"
                        },
                      }
                }
            ],
        }
    }
    alertname(args) {
        alert(args.STR)
    }
}
Scratch.extensions.register(new website())