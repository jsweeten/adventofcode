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
                switch (line[0])
                {
                    case 'A':
                        if (line[2] == 'X')
                        {
                            score += 1;
                            score += 3;
                        }
                        else if (line[2] == 'Y')
                        {
                            score += 2;
                            score += 6;
                        }
                        else if (line[2] == 'Z')
                        {
                            score += 3;
                        }
                            break;
                    case 'B':
                        if (line[2] == 'X')
                        {
                            score += 1;
                        }
                        else if (line[2] == 'Y')
                        {
                            score += 2;
                            score += 3;
                        }
                        else if (line[2] == 'Z')
                        {
                            score += 3;
                            score += 6;
                        }
                        break;
                    case 'C':
                        if (line[2] == 'X')
                        {
                            score += 1;
                            score += 6;
                        }
                        else if (line[2] == 'Y')
                        {
                            score += 2;
                        }
                        else if (line[2] == 'Z')
                        {
                            score += 3;
                            score += 3;
                        }
                        break;
                    default:
                        throw new Exception("Improper input!");
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