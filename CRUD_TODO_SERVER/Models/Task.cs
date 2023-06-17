namespace CRUD_TODO_SERVER.Models
{
    public class Task
    {
        public int taskId { get; set; }
        public string title { get; set; }
        public string userName { get; set; }
        public int categoryID { get; set; }
        public int data { get; set; }
        public int colorID { get; set; }
        public bool IsComplite { get; set; }
        public int intervalID { get; set; }
        public int priority { get; set; }
    }
}
