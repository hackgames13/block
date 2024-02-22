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
                    text: 'Alert [STR]',
                    disableMonitor: true,
                    arguments: {
                        STR: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: "Hello world!"
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
