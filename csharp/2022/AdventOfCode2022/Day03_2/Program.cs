using System.Xml;

internal class Program
{
    private static void Main()
    {
        int score = 0;
        string elf1;
        string elf2;
        string elf3;

        try
        {
            var sr = new StreamReader("input.txt");
            
            elf1 = sr.ReadLine();
            elf2 = sr.ReadLine();
            elf3 = sr.ReadLine();
            var group = new List<string>
            {
                elf1,
                elf2,
                elf3
            };

            while (group[2] != null)
            {
                foreach (char item in elf1)
                {
                    if (elf2.Contains(item) && elf3.Contains(item))
                    {
                        if (Char.IsUpper(item))
                        {
                            score += (item - 38);
                        }
                        else
                        {
                            score += (item - 96);
                        }
                        break;
                    }
                }
                elf1 = sr.ReadLine();
                elf2 = sr.ReadLine();
                elf3 = sr.ReadLine();
                group = new List<string>
                {
                    elf1,
                    elf2,
                    elf3
                };
            };
            sr.Close();
        }
        catch (Exception e)
        {
            Console.WriteLine("Exception: " + e.Message);
        }
        finally
        {
            Console.WriteLine("Total Score: " + score);
            Console.ReadLine();
        }
    }
}