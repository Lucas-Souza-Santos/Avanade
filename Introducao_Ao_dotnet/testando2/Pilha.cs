using System;

namespace testando2{

    public class Pilha{

        Posicao primeiro;
       public void Empilha(object item){
           primeiro = new Posicao(primeiro, item);
       }

    }

    class Posicao
    {
        public Posicao proximo;

        public object item;

        public Posicao(Posicao proximo, object item)
        {
            this.proximo = proximo;
            this.item = item;
        }
    }



}

