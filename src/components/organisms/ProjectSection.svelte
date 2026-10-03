<script lang="ts">
import Chips from "@components/atoms/action/Chips.svelte";
import Card from "@components/atoms/display/Card.svelte";
import PageHeader from "@components/molecules/PageHeader.svelte";
import ProjectCard from "@components/molecules/ProjectCard.svelte";
import I18nKey from "@i18n/i18nKey";
import { i18n } from "@i18n/translation";
import Icon from "@iconify/svelte";
import TextField from "@components/atoms/input/TextField.svelte";
import type { ProjectCategory, ProjectItem } from "@/types/projectsConfig";

let {
	categories = [] as ProjectCategory[],
	items = [] as ProjectItem[],
	title = i18n(I18nKey.projects),
	subtitle = i18n(I18nKey.projectsBanner),
}: {
	categories?: ProjectCategory[];
	items?: ProjectItem[];
	title?: string;
	subtitle?: string;
} = $props();

let query = $state("");
let selectedCategory = $state("");

const enabledItems = $derived(items.filter((item) => item.enable !== false));
const categoryItems = $derived(
	categories
		.filter((category) => enabledItems.some((item) => item.category === category.key))
		.map((category) => ({
			value: category.key,
			label: category.label,
			leadingIcon: category.icon ?? "",
		})),
);
const filteredItems = $derived.by(() => {
	const normalized = query.trim().toLowerCase();
	return enabledItems.filter((item) => {
		if (selectedCategory && item.category !== selectedCategory) return false;
		if (!normalized) return true;
		return [item.title, item.summary, item.category, item.phase, item.year ?? "", ...item.technologies]
			.some((value) => value.toLowerCase().includes(normalized));
	});
});
</script>

<Card color="var(--card-bg)" radius="l" class="projects-section px-8 py-6">
	<PageHeader icon="material-symbols:deployed-code-outline-rounded" {title} {subtitle} />
	{#if enabledItems.length > 0}
		<div class="projects-section__tools">
			<TextField type="search" bind:value={query} placeholder={i18n(I18nKey.search)} label={i18n(I18nKey.search)} hideLabel variant="outlined">
				<Icon slot="leading" icon="material-symbols:search-rounded" aria-hidden="true" />
			</TextField>
			{#if categoryItems.length > 1}
				<Chips items={categoryItems} variant="filter" bind:value={selectedCategory} />
			{/if}
			<p class="projects-section__count" aria-live="polite">{filteredItems.length} {i18n(I18nKey.projectsCounts)}</p>
		</div>
	{/if}

	{#if filteredItems.length > 0}
		<div class="projects-section__grid" aria-live="polite">
			{#each filteredItems as project, index (project.key)}
				<ProjectCard {project} delay={Math.min(index, 7) * 45} />
			{/each}
		</div>
	{:else}
		<div class="projects-section__empty">
			<Icon icon="material-symbols:folder-off-outline-rounded" aria-hidden="true" />
			<span>{i18n(I18nKey.projectsNoResults)}</span>
		</div>
	{/if}
</Card>

<style lang="stylus">
@import "../../styles/breakpoints.styl"

.projects-section
	display: block

	&__tools
		display: flex
		flex-direction: column
		gap: 0.875rem
		padding-bottom: 1.25rem
		border-bottom: 1px solid var(--outline-variant)

	&__count
		margin: 0
		color: var(--on-surface-variant)
		font: var(--m3e-type-body-small)

	&__grid
		display: grid
		grid-template-columns: minmax(0, 1fr)
		gap: 1rem
		margin-top: 1.25rem

		@media (min-width: bp-md)
			grid-template-columns: repeat(auto-fit, minmax(min(100%, 18rem), 1fr))

	&__empty
		display: grid
		place-items: center
		gap: 0.875rem
		min-height: 12rem
		color: var(--on-surface-variant)
		font: var(--m3e-type-body-large)

		> :global(svg)
			width: 2.75rem
			height: 2.75rem
			color: var(--outline)

	@media (max-width: bp-sm - 1px)
		padding: 1rem 0.75rem
</style>