using System;

namespace testes
{
    class Program
    {
        
        static void Main()
        {
            nivelTartaruta();
            nivelTartaruta();
            nivelTartaruta();
            
        }

        public void nivelTartaruta()
        {
            int num = int.Parse(Console.ReadLine());
            string[] velocidades = Console.ReadLine().Split(" ");
            int maior = 0;
            
            for(int i = 0; i < num; i++){
                velocidades[i] = int.Parse(velocidades[i]);
                if(i == 0){
                    maior = velocidades[i];
                }
                else{
                if(velocidades[i] > maior){
                    maior = velocidades[i];
                }
                }
                Console.WriteLine(maior);
        }
    }



}