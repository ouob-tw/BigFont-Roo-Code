import { memo } from "react"

import { useTaskSearch } from "./useTaskSearch"
import TaskItem from "./TaskItem"

const HistoryPreview = () => {
	const { tasks } = useTaskSearch()

	return (
		<div className="flex flex-col gap-3" style={{ fontSize: "var(--custom-p-font-size)" }}>
			{tasks.length !== 0 && (
				<>
					{tasks.slice(0, 3).map((item) => (
						<TaskItem key={item.id} item={item} variant="compact" />
					))}
				</>
			)}
		</div>
	)
}

export default memo(HistoryPreview)
