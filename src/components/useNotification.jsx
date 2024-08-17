import React, { useEffect } from "react";

const useNotification = (tasks) => {
  useEffect(() => {
    const checkDueTasks = () => {
      const now = new Date();
      tasks.forEach((task) => {
        const dueDate = new Date(task.dueDate);
        if (dueDate <= now && !task.notified) {
          new Notification("Task Due", {
            body: `The task "${task.title}" is due!`,
          });
          task.notified = true; // Mark task as notified
        }
      });
    };

    if (Notification.permission === "granted") {
      const interval = setInterval(checkDueTasks, 60000); // Check every minute
      return () => clearInterval(interval);
    } else if (Notification.permission !== "denied") {
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          const interval = setInterval(checkDueTasks, 60000);
          return () => clearInterval(interval);
        }
      });
    }
  }, [tasks]);
};

export default useNotification;
