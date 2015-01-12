using System.Text;

namespace Snake.Components
{
    public static class CustomEncoder
    {
        public static string Encode(string text)
        {
            var result = new StringBuilder(text);

            for (int i = 0; (i + 2) < text.Length; i += 3)
            {
                var temp = result[i];
                result[i] = result[i + 2];
                result[i + 2] = temp;
            }

            return result.ToString();
        }
    }
}