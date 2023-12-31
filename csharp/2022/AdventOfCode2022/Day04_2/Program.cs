using System.Xml;

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

            char[] delimiterChars = ['-', ','];

            while (line != null)
            {
                var ranges = line.Split(delimiterChars);

                if ((Int32.Parse(ranges[0]) >= Int32.Parse(ranges[2]) &&
                    Int32.Parse(ranges[3]) >= Int32.Parse(ranges[0])) ||
                    (Int32.Parse(ranges[2]) >= Int32.Parse(ranges[0]) &&
                    Int32.Parse(ranges[1]) >= Int32.Parse(ranges[2])))
                {
                    score++;
                }

                line = sr.ReadLine();
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