
internal class Program
{
    private static void Main()
    {
        int best = 0;
        int current = 0;
        string line;

        try
        {
            var sr = new StreamReader("input.txt");
            line = sr.ReadLine();

            while (line != null)
            {
                if (string.IsNullOrWhiteSpace(line))
                {
                    best = Math.Max(best, current);
                    current = 0;
                }
                else
                {
                    var calories = int.Parse(line);
                    current += calories;
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
            Console.WriteLine("Highest Calories: " + best);
            Console.ReadLine();
        }
    }
}