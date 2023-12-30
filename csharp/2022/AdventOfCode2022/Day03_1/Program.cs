internal class Program
{
    private static void Main()
    {
        int score = 0;
        string line;

        try
        {
            var sr = new StreamReader("input.txt");
            line = sr.ReadLine();

            while (line != null)
            {
                int halfLength = line.Count() / 2;
                string compartment1 = line[..halfLength];
                string compartment2 = line[halfLength..];

                foreach (char item1 in compartment1)
                {
                    if (compartment2.Contains(item1))
                    {
                        if (Char.IsUpper(item1))
                        {
                            score += (item1 - 38);
                        }
                        else
                        {
                            score += (item1 - 96);
                        }
                        break;
                    }
                }
            line = sr.ReadLine();
            }
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