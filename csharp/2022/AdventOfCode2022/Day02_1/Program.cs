internal class Program
{
    private static void Main()
    {
        List<int> elves = new();
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
                    elves.Add(current);
                    current = 0;
                }
                else
                {
                    var calories = int.Parse(line);
                    current += calories;
                }
                line = sr.ReadLine();
            }

            elves.Add(current);
            sr.Close();
        }
        catch (Exception e)
        {
            Console.WriteLine("Exception: " + e.Message);
        }
        finally
        {
            var total = elves.OrderByDescending(x => x).Take(3).Sum();

            Console.WriteLine("Calories from Top Three Elves: " + total);
            Console.ReadLine();
        }
    }
}