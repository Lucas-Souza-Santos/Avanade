using System;

namespace testes
{
    class Program
    {
        static void Main(string[] args)
        {
            int D = 3, N =5;
            string[] dados = {"20/9/2016 1 1 1 1 1", "30/9/2016 1 1 1 1 1", "1/10/2016 1 1 1 0 1"};
            int somaVoto = 0;
            int quantDia = 2030 * 360 + 12 * 30;
            string dataEscolhida = "Pizza antes de FdA";
        
            for(int i = 0; i < D; i++)
            {
                string valor = dados[i];
                int dia = int.Parse(valor.Split(" ")[0].Split("/")[0]);
                int mes = int.Parse(valor.Split(" ")[0].Split("/")[1]);
                int ano = int.Parse(valor.Split(" ")[0].Split("/")[2]);
                int dias = 360 * ano + mes * 30  + dia;
                // Console.WriteLine($"dias: {dias} quantDias: {quantDia}");
                
                for(int j = 1; j <= N; j++)
                {
                    somaVoto += int.Parse(valor.Split(" ")[j]);
                }

                if(somaVoto == N && dias < quantDia)
                {   
                    quantDia = dias;
                    dataEscolhida = valor.Split(" ")[0]; 
                }

                somaVoto = 0;
            }
            //dataEscolhida = diaEscolhido.ToString() + "/" + mesEscolhido.ToString()+ "/" + anoEscolhido.ToString();
            if(dataEscolhida != "Pizza antes do FdA")
            {
                Console.Write(dataEscolhida);

            }else{
                Console.Write(dataEscolhida);
            }
                   
        }
    }
}
