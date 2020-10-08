    interface Source {
        src: string;
        type: string;
    }
    interface ICustomPlayer {
        width: number;
        height: number;
        title: string;
        sources: Array<Source>;
        setSources: (data: Array<Source>) => void;
        render: (id: string) => void;
    }
    export class CustomPlayer implements ICustomPlayer {
        width: number;
        height: number;
        title: string;
        sources: Array<Source> = [];
        constructor(width: number, height: number, title: string) {
            this.width = width;
            this.height = height;
            this.title = title;
        }
        setSources(data: Array<Source>) {
            this.sources = data;
        }
        render(id: string) {
            var conteiner = document.getElementById(id);
            if (conteiner === null){
                throw new Error(`Elemento com o id ${id} não existe`)

            }else{
                var video = document.createElement("video");
                video.width = this.width;
                video.height = this.height;
                video.setAttribute("controls", "");
                this.sources.forEach((item) => {
                    var source = document.createElement("source");
                    source.src = item.src;
                    source.type = item.type;
                    video.append(source);
                });
                video.append(this.title);
                conteiner.innerHTML = video.outerHTML;
            }
        }
    }

