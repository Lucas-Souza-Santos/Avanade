using System;

namespace Revisao
{
    class Program
    {
        private static void menu(){

            Console.WriteLine("Informe a opção desejada: ");
            Console.WriteLine("1- Inserir novo Aluno");
            Console.WriteLine("2- Listar ALunos");
            Console.WriteLine("3- Calcular média geral");
            Console.WriteLine("X- Sair");
            Console.WriteLine();

        }
        static void Main(string[] args)
        {
            menu();

            string opcaoUsuario = Console.ReadLine();

            while(opcaoUsuario.ToUpper() != "X")
            {
                switch(opcaoUsuario)
                {
                    case "1":
                        //TODO: adicionar aluno
                        break;
                    case "2":
                        // TODO: listar alunos
                        break;
                    case "3":
                        // TODO: calcular média geral
                        break;
                    default:
                        throw new ArgumentOutOfRangeException();
                }

                menu();

                opcaoUsuario = Console.ReadLine();
            }

            Console.WriteLine("Saindo");
        }
    }
}
